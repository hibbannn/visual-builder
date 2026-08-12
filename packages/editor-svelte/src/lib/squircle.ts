/**
 * G2 Curvature-Continuous Squircle
 *
 * Generates SVG paths for rounded rectangles where the curvature transitions
 * smoothly from 0 (straight edge) to maximum (corner apex), achieving G2
 * curvature continuity — unlike CSS border-radius which only gives G1 tangent
 * continuity with an abrupt curvature jump.
 *
 * Based on the superellipse formula: |x/a|^n + |y/b|^n = 1
 * where n > 2 controls smoothness (n=2 is ellipse/circle, n→∞ is rectangle).
 * Apple uses approximately n=5 for their "squircle" corners.
 */

/**
 * Generate a single point on a superellipse arc.
 */
function superellipsePoint(
	t: number,
	cx: number,
	cy: number,
	r: number,
	n: number
): [number, number] {
	const cosT = Math.cos(t);
	const sinT = Math.sin(t);
	const x = cx + r * Math.sign(cosT) * Math.pow(Math.abs(cosT), 2 / n);
	const y = cy + r * Math.sign(sinT) * Math.pow(Math.abs(sinT), 2 / n);
	return [x, y];
}

/**
 * Generate an SVG path for a squircle (G2 continuous rounded rectangle).
 *
 * @param width  - Element width in pixels
 * @param height - Element height in pixels
 * @param radius - Corner radius in pixels (clamped to min(w,h)/2)
 * @param n      - Superellipse exponent (default 5, higher = sharper corner)
 * @returns SVG path data string suitable for clip-path: path('...')
 */
export function squirclePath(
	width: number,
	height: number,
	radius: number,
	n = 5
): string {
	const r = Math.min(radius, width / 2, height / 2);
	if (r <= 0) {
		return `M 0 0 L ${width} 0 L ${width} ${height} L 0 ${height} Z`;
	}

	// If radius is large enough to be a full pill/ellipse, use superellipse
	if (r >= width / 2 && r >= height / 2) {
		const cx = width / 2;
		const cy = height / 2;
		const steps = 64;
		let path = '';
		for (let i = 0; i <= steps; i++) {
			const t = (2 * Math.PI * i) / steps;
			const [x, y] = superellipsePoint(t, cx, cy, Math.min(width, height) / 2, n);
			path += i === 0 ? `M ${x.toFixed(2)} ${y.toFixed(2)}` : ` L ${x.toFixed(2)} ${y.toFixed(2)}`;
		}
		return path + ' Z';
	}

	// Four corners, each a quarter superellipse
	// Order: TL → TR → BR → BL (clockwise)
	const corners = [
		{ cx: r, cy: r, tStart: Math.PI, tEnd: 3 * Math.PI / 2 },         // TL: left→top
		{ cx: width - r, cy: r, tStart: 3 * Math.PI / 2, tEnd: 2 * Math.PI }, // TR: top→right
		{ cx: width - r, cy: height - r, tStart: 0, tEnd: Math.PI / 2 },  // BR: right→bottom
		{ cx: r, cy: height - r, tStart: Math.PI / 2, tEnd: Math.PI },    // BL: bottom→left
	];

	// Sample the superellipse at each corner and connect with line segments.
	// The superellipse formula already produces G2-continuous curvature,
	// so no spline interpolation is needed — just enough sample points.
	const stepsPerCorner = 24;
	let path = '';

	for (let c = 0; c < corners.length; c++) {
		const corner = corners[c];
		for (let i = 0; i <= stepsPerCorner; i++) {
			const t = corner.tStart + (corner.tEnd - corner.tStart) * (i / stepsPerCorner);
			const [x, y] = superellipsePoint(t, corner.cx, corner.cy, r, n);
			const cmd = path === '' ? 'M' : 'L';
			path += `${cmd} ${x.toFixed(2)} ${y.toFixed(2)} `;
		}
	}

	return path + 'Z';
}

/**
 * Svelte action: applies G2 squircle clip-path to an element.
 * Automatically re-generates on resize via ResizeObserver.
 *
 * Usage:
 *   <div use:squircle={{ radius: 16 }}>...</div>
 *   <div use:squircle={{ radius: 16, n: 5 }}>...</div>
 *
 * Note: clip-path clips box-shadow drop shadows. This action automatically
 * moves drop shadows to filter: drop-shadow() so they follow the squircle
 * shape. Inset box-shadows (used for borders) are preserved.
 */
export function squircle(
	node: HTMLElement,
	params: { radius?: number; n?: number } = {}
) {
	let observer: ResizeObserver | null = null;
	let mutationObserver: MutationObserver | null = null;
	let originalBoxShadow: string | null = null;
	let originalFilter: string | null = null;
	let radius = params.radius ?? 16;

	// Set border-radius immediately as a CSS fallback so the element is
	// never visible with sharp corners, even before layout is complete.
	node.style.borderRadius = `${radius}px`;

	function apply() {
		const rect = node.getBoundingClientRect();
		if (rect.width === 0 || rect.height === 0) return;
		const r = Math.min(radius, rect.width / 2, rect.height / 2);
		const path = squirclePath(
			rect.width,
			rect.height,
			radius,
			params.n ?? 5
		);
		node.style.clipPath = `path('${path}')`;
		node.style.borderRadius = `${r}px`;

		// Move drop shadows from box-shadow to filter: drop-shadow()
		// because clip-path clips box-shadow drop shadows.
		// Inset shadows (borders) are preserved in box-shadow.
		// Store original values on first call to avoid reading
		// already-modified styles on subsequent ResizeObserver calls.
		if (originalBoxShadow === null) {
			const cs = getComputedStyle(node);
			originalBoxShadow = cs.boxShadow;
			originalFilter = cs.filter;
		}
		if (originalBoxShadow && originalBoxShadow !== 'none') {
			const parts = splitBoxShadow(originalBoxShadow);
			const dropParts: string[] = [];
			const insetParts: string[] = [];
			for (const part of parts) {
				if (part.includes('inset')) {
					insetParts.push(part);
				} else {
					// Convert box-shadow to drop-shadow() format:
					// drop-shadow() doesn't support spread-radius (4th value)
					dropParts.push(boxShadowToDropShadow(part));
				}
			}
			if (dropParts.length > 0) {
				node.style.filter = dropParts.map(p => `drop-shadow(${p})`).join(' ');
			} else {
				node.style.filter = originalFilter || 'none';
			}
			if (insetParts.length > 0) {
				node.style.boxShadow = insetParts.join(', ');
			} else {
				node.style.boxShadow = 'none';
			}
		} else {
			// No box-shadow from CSS — clear any previously set inline styles
			node.style.filter = originalFilter || 'none';
			node.style.boxShadow = 'none';
		}
	}

	function resetAndApply() {
		// Clear inline styles so getComputedStyle reads the actual CSS values
		node.style.boxShadow = '';
		node.style.filter = '';
		originalBoxShadow = null;
		originalFilter = null;
		apply();
	}

	function setup() {
		apply();
		if (typeof ResizeObserver !== 'undefined') {
			observer = new ResizeObserver(() => {
				// Disable transitions during resize to prevent `transition: all`
				// from animating clip-path/border-radius changes (causes flicker).
				// Restore on next frame after the new clip-path is applied.
				node.style.transition = 'none';
				apply();
				requestAnimationFrame(() => {
					node.style.transition = '';
				});
			});
			observer.observe(node);
		}
		// Watch for class attribute changes (e.g. active/inactive toggle)
		// and re-read box-shadow from CSS, since the cached value may be stale.
		if (typeof MutationObserver !== 'undefined') {
			mutationObserver = new MutationObserver((mutations) => {
				for (const m of mutations) {
					if (m.type === 'attributes' && m.attributeName === 'class') {
						resetAndApply();
						return;
					}
				}
			});
			mutationObserver.observe(node, { attributes: true, attributeFilter: ['class'] });
		}
	}

	// Apply clip-path immediately (border-radius fallback already set above).
	// If layout isn't ready (width=0), ResizeObserver will catch it.
	setup();

	return {
		update(newParams: { radius?: number; n?: number }) {
			params = newParams;
			radius = newParams.radius ?? 16;
			node.style.borderRadius = `${radius}px`;
			apply();
		},
		destroy() {
			observer?.disconnect();
			mutationObserver?.disconnect();
		}
	};
}

/**
 * Split a computed box-shadow value into individual shadow parts,
 * handling commas inside rgba()/hsla() functions.
 */
function splitBoxShadow(value: string): string[] {
	const parts: string[] = [];
	let depth = 0;
	let current = '';
	for (const ch of value) {
		if (ch === '(') depth++;
		else if (ch === ')') depth--;
		if (ch === ',' && depth === 0) {
			parts.push(current.trim());
			current = '';
		} else {
			current += ch;
		}
	}
	if (current.trim()) parts.push(current.trim());
	return parts;
}

/**
 * Convert a box-shadow value (without inset) to a drop-shadow()-compatible
 * string. drop-shadow() doesn't support spread-radius, so we strip the 4th
 * numeric value if present.
 *
 * Computed box-shadow format: <color> <ox>px <oy>px <blur>px <spread>px
 * drop-shadow() format:       <color> <ox>px <oy>px <blur>px
 */
function boxShadowToDropShadow(shadow: string): string {
	const cleaned = shadow.replace(/\s+/g, ' ').trim();
	// Extract color (rgba(), hsla(), or named/hex)
	const colorMatch = cleaned.match(/rgba?\([^)]+\)|hsla?\([^)]+\)|#[0-9a-fA-F]+|[a-z]+/);
	const color = colorMatch ? colorMatch[0] : '';
	// Extract numeric values (e.g., "0px 1px 3px 0px")
	const nums = cleaned.match(/-?[\d.]+px/g) || [];
	// drop-shadow() only takes offset-x, offset-y, blur-radius (3 values max)
	const keptNums = nums.slice(0, 3);
	return `${color} ${keptNums.join(' ')}`.trim();
}
