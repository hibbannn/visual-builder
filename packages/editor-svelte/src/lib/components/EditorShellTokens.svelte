<div class="builder-shell-tokens">
	<slot />
</div>

<style>
	:global(:root),
	:global(.builder-shell-tokens) {
		/* ── Aitinara Apple Design Tokens ── */
		--builder-shell-top-bar-height: 44px;
		--builder-shell-responsive-bar-height: 40px;
		--builder-shell-panel-width: 280px;
		--builder-shell-panel-width-xl: 300px;
		--builder-shell-navigator-width: 240px;
		--builder-shell-panel-header-height: 48px;
		--builder-shell-panel-footer-height: 40px;
		--builder-shell-navigator-floating-height: 50vh;
		--builder-shell-control-height: 28px;
		--builder-shell-control-height-sm: 22px;
		--builder-shell-font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", "Inter", Roboto, Helvetica, Arial, sans-serif;
		--builder-shell-font-size: 13px;
		--builder-shell-line-height: 1.4;
		--builder-shell-space-5: 5px;
		--builder-shell-space-6: 8px;
		--builder-shell-space-8: 8px;
		--builder-shell-space-10: 12px;
		--builder-shell-space-12: 12px;
		--builder-shell-space-16: 16px;
		--builder-shell-radius: 6px;
		--builder-shell-radius-sm: 4px;
		--builder-shell-radius-lg: 8px;
		--builder-shell-radius-pill: 999px;
		--builder-shell-focus-ring: 0 0 0 1px var(--builder-shell-accent), 0 0 0 3px rgba(0, 113, 227, 0.2);

		/* ── Gray scale → Apple text/border tokens ── */
		--builder-shell-gray-25: #f5f5f7;
		--builder-shell-gray-50: #f5f5f7;
		--builder-shell-gray-75: #e8e8ed;
		--builder-shell-gray-100: #d2d2d7;
		--builder-shell-gray-200: #a1a1a6;
		--builder-shell-gray-300: #a1a1a6;
		--builder-shell-gray-400: #6e6e73;
		--builder-shell-gray-500: #6e6e73;
		--builder-shell-gray-600: #6e6e73;
		--builder-shell-gray-700: #1d1d1f;
		--builder-shell-gray-725: #1d1d1f;
		--builder-shell-gray-750: #1d1d1f;
		--builder-shell-gray-800: #1d1d1f;
		--builder-shell-gray-900: #1d1d1f;

		/* ── Accent: Apple Blue (replaces magenta) ── */
		--builder-shell-pink-200: #7ab8f0;
		--builder-shell-pink-800: #0071e3;
		--builder-shell-pink-900: #0077ed;
		--builder-shell-rose-800: #0071e3;
		--builder-shell-indigo-600: #5b5bf5;
		--builder-shell-teal-600: #34c759;
		--builder-shell-warning: #ff9f0a;
		--builder-shell-danger: #ff3b30;
		--builder-shell-info: #0071e3;

		/* ── Surfaces: macOS light ── */
		--builder-shell-bg: #ebecf0;
		--builder-shell-panel-bg: #ffffff;
		--builder-shell-panel-bg-muted: rgba(0, 0, 0, 0.03);
		--builder-shell-panel-surface: #ffffff;
		--builder-shell-stage-bg: rgba(0, 0, 0, 0.04);
		--builder-shell-stage-bg-deep: rgba(0, 0, 0, 0.06);
		--builder-shell-toolbar-bg: rgba(246, 246, 246, 0.8);
		--builder-shell-toolbar-bg-subtle: rgba(246, 246, 246, 0.7);
		--builder-shell-toolbar-text: #1d1d1f;
		--builder-shell-toolbar-text-muted: #6e6e73;

		/* ── Text ── */
		--builder-shell-text: #6e6e73;
		--builder-shell-text-muted: #a1a1a6;
		--builder-shell-text-strong: #1d1d1f;
		--builder-shell-heading: #1d1d1f;

		/* ── Borders ── */
		--builder-shell-border: rgba(0, 0, 0, 0.12);
		--builder-shell-border-strong: #d2d2d7;
		--builder-shell-border-dark: rgba(0, 0, 0, 0.12);

		/* ── Hover/active ── */
		--builder-shell-bg-surface: #ffffff;
		--builder-shell-bg-surface-muted: rgba(0, 0, 0, 0.03);
		--builder-shell-bg-hover: rgba(0, 0, 0, 0.04);
		--builder-shell-bg-active: rgba(0, 0, 0, 0.06);
		--builder-shell-bg-chip: rgba(0, 0, 0, 0.03);
		--builder-shell-bg-dark: rgba(0, 0, 0, 0.03);
		--builder-shell-bg-dark-alt: rgba(0, 0, 0, 0.04);

		/* ── Dark panel → light (Apple sidebar, not dark IDE) ── */
		--builder-shell-dark-panel: #ffffff;
		--builder-shell-dark-panel-raised: #ffffff;
		--builder-shell-dark-panel-muted: rgba(0, 0, 0, 0.03);
		--builder-shell-dark-panel-subtle: rgba(0, 0, 0, 0.04);
		--builder-shell-dark-field: rgba(0, 0, 0, 0.03);
		--builder-shell-dark-field-hover: rgba(0, 0, 0, 0.04);
		--builder-shell-dark-border: rgba(0, 0, 0, 0.12);
		--builder-shell-dark-border-strong: #d2d2d7;
		--builder-shell-dark-text: #1d1d1f;
		--builder-shell-dark-text-muted: #6e6e73;
		--builder-shell-dark-text-subtle: #a1a1a6;

		/* ── Accent ── */
		--builder-shell-border-color: var(--builder-shell-border);
		--builder-shell-border-color-bold: var(--builder-shell-border-strong);
		--builder-shell-accent-soft: #7ab8f0;
		--builder-shell-accent: #0071e3;
		--builder-shell-accent-strong: #0077ed;
		--builder-shell-accent-surface: #e6f0fa;
		--builder-shell-accent-text: #005bb5;

		/* ── Shadows: macOS ── */
		--builder-shell-shadow-card: 0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02);
		--builder-shell-shadow-popover: 0 0 0 0.5px rgba(0, 0, 0, 0.08), 0 8px 32px rgba(0, 0, 0, 0.12);
		--builder-shell-shadow-panel: 0 8px 24px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04);

		/* ── Transition: macOS spring-like ── */
		--builder-shell-transition-hover: background-color 120ms cubic-bezier(0.25, 0.1, 0.25, 1), border-color 120ms cubic-bezier(0.25, 0.1, 0.25, 1), color 120ms cubic-bezier(0.25, 0.1, 0.25, 1), box-shadow 120ms cubic-bezier(0.25, 0.1, 0.25, 1);
	}

	:global(.builder-shell-tokens) {
		display: contents;
		font-family: var(--builder-shell-font-family);
		font-size: var(--builder-shell-font-size);
		line-height: var(--builder-shell-line-height);
		color: var(--builder-shell-text);
	}

	:global(.builder-shell-tokens *),
	:global(.builder-shell-tokens *::before),
	:global(.builder-shell-tokens *::after) {
		box-sizing: border-box;
	}

	:global(.builder-shell-tokens button),
	:global(.builder-shell-tokens input),
	:global(.builder-shell-tokens select),
	:global(.builder-shell-tokens textarea) {
		font: inherit;
	}

	:global(.builder-shell-toolbar-button),
	:global(.builder-shell-button),
	:global(.builder-shell-icon-button) {
		appearance: none;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.4rem;
		height: var(--builder-shell-control-height);
		padding: 0 0.7rem;
		border: 1px solid transparent;
		border-radius: var(--builder-shell-radius-lg);
		background: transparent;
		color: inherit;
		cursor: pointer;
		transition: var(--builder-shell-transition-hover);
		font-size: 12px;
		font-weight: 400;
		white-space: nowrap;
	}

	:global(.builder-shell-toolbar-button:hover),
	:global(.builder-shell-button:hover),
	:global(.builder-shell-icon-button:hover) {
		background: rgba(0, 0, 0, 0.04);
	}

	:global(.builder-shell-icon-button) {
		width: var(--builder-shell-control-height);
		padding: 0;
	}

	:global(.builder-shell-toolbar-button:focus-visible),
	:global(.builder-shell-button:focus-visible),
	:global(.builder-shell-icon-button:focus-visible) {
		outline: none;
		border-color: var(--builder-shell-accent);
		box-shadow: var(--builder-shell-focus-ring);
	}

	:global(.builder-shell-button--light) {
		border-color: var(--builder-shell-border);
		background: #ffffff;
		color: var(--builder-shell-text-strong);
	}

	:global(.builder-shell-button--light:hover) {
		background: var(--builder-shell-panel-bg-muted);
	}

	:global(.builder-shell-button--dark) {
		border-color: rgba(0, 0, 0, 0.12);
		background: rgba(0, 0, 0, 0.03);
		color: var(--builder-shell-toolbar-text-muted);
	}

	:global(.builder-shell-button--dark:hover) {
		border-color: rgba(0, 0, 0, 0.18);
		background: rgba(0, 0, 0, 0.04);
		color: var(--builder-shell-toolbar-text);
	}

	:global(.builder-shell-button--publish) {
		border-color: var(--builder-shell-accent);
		background: var(--builder-shell-accent);
		color: #ffffff;
		font-weight: 500;
	}

	:global(.builder-shell-button--publish:hover) {
		border-color: var(--builder-shell-accent-strong);
		background: var(--builder-shell-accent-strong);
	}

	:global(.builder-shell-button--publish:focus-visible) {
		box-shadow: 0 0 0 1px var(--builder-shell-accent-soft);
	}

	:global(.builder-shell-button--ghost) {
		border-color: transparent;
		background: transparent;
		color: var(--builder-shell-text-muted);
		padding-inline: 0.45rem;
	}

	:global(.builder-shell-button--ghost:hover) {
		background: var(--builder-shell-panel-bg-muted);
		color: var(--builder-shell-heading);
	}

	:global(.builder-panel-shell--dark .builder-shell-button--ghost) {
		color: var(--builder-shell-dark-text-muted);
	}

	:global(.builder-panel-shell--dark .builder-shell-button--ghost:hover) {
		background: rgba(0, 0, 0, 0.04);
		color: var(--builder-shell-dark-text);
	}

	:global(.builder-shell-button--primary),
	:global(.builder-shell-button--danger) {
		border-color: var(--builder-shell-border);
		background: #ffffff;
		color: var(--builder-shell-text-strong);
	}

	:global(.builder-shell-button--primary:hover) {
		border-color: var(--builder-shell-accent);
		background: var(--builder-shell-accent-surface);
		color: var(--builder-shell-accent-text);
	}

	:global(.builder-shell-button--danger:hover) {
		border-color: rgba(220, 38, 38, 0.36);
		background: rgba(220, 38, 38, 0.08);
		color: #991b1b;
	}

	:global(.builder-panel-shell--dark .builder-shell-button--primary),
	:global(.builder-panel-shell--dark .builder-shell-button--danger) {
		border-color: var(--builder-shell-dark-border);
		background: rgba(0, 0, 0, 0.03);
		color: var(--builder-shell-dark-text);
	}

	:global(.builder-panel-shell--dark .builder-shell-button--primary:hover) {
		border-color: rgba(0, 113, 227, 0.46);
		background: rgba(0, 113, 227, 0.08);
		color: #1d1d1f;
	}

	:global(.builder-panel-shell--dark .builder-shell-button--danger:hover) {
		border-color: rgba(255, 59, 48, 0.38);
		background: rgba(255, 59, 48, 0.08);
		color: #ff3b30;
	}

	:global(.builder-shell-button:disabled),
	:global(.builder-shell-toolbar-button:disabled),
	:global(.builder-shell-icon-button:disabled) {
		opacity: 0.48;
		cursor: not-allowed;
	}

	:global(.builder-shell-input),
	:global(.builder-shell-select),
	:global(.builder-shell-field input),
	:global(.builder-shell-field select),
	:global(.builder-shell-field textarea) {
		width: 100%;
		min-height: var(--builder-shell-control-height);
		padding: 0 0.65rem;
		border: 1px solid var(--builder-shell-border-strong);
		border-radius: var(--builder-shell-radius-lg);
		background: var(--builder-shell-panel-bg);
		color: var(--builder-shell-text-strong);
		box-shadow: none;
		transition: border-color 120ms cubic-bezier(0.25, 0.1, 0.25, 1), box-shadow 120ms cubic-bezier(0.25, 0.1, 0.25, 1), background-color 120ms cubic-bezier(0.25, 0.1, 0.25, 1);
	}

	:global(.builder-shell-input:hover),
	:global(.builder-shell-select:hover),
	:global(.builder-shell-field input:hover),
	:global(.builder-shell-field select:hover),
	:global(.builder-shell-field textarea:hover) {
		border-color: var(--builder-shell-gray-300);
	}

	:global(.builder-shell-input:focus-visible),
	:global(.builder-shell-select:focus-visible),
	:global(.builder-shell-field input:focus-visible),
	:global(.builder-shell-field select:focus-visible),
	:global(.builder-shell-field textarea:focus-visible) {
		outline: none;
		border-color: var(--builder-shell-accent);
		box-shadow: var(--builder-shell-focus-ring);
	}

	:global(.builder-panel-shell--dark .builder-shell-input),
	:global(.builder-panel-shell--dark .builder-shell-select),
	:global(.builder-panel-shell--dark .builder-shell-field input),
	:global(.builder-panel-shell--dark .builder-shell-field select),
	:global(.builder-panel-shell--dark .builder-shell-field textarea) {
		border-color: var(--builder-shell-dark-border);
		background-color: var(--builder-shell-dark-field);
		color: var(--builder-shell-dark-text);
		color-scheme: dark;
	}

	:global(.builder-panel-shell--dark .builder-shell-input::placeholder),
	:global(.builder-panel-shell--dark .builder-shell-field input::placeholder),
	:global(.builder-panel-shell--dark .builder-shell-field textarea::placeholder) {
		color: var(--builder-shell-dark-text-subtle);
	}

	:global(.builder-panel-shell--dark .builder-shell-input:hover),
	:global(.builder-panel-shell--dark .builder-shell-select:hover),
	:global(.builder-panel-shell--dark .builder-shell-field input:hover),
	:global(.builder-panel-shell--dark .builder-shell-field select:hover),
	:global(.builder-panel-shell--dark .builder-shell-field textarea:hover) {
		border-color: var(--builder-shell-dark-border-strong);
		background-color: var(--builder-shell-dark-field-hover);
	}

	:global(.builder-panel-shell--dark .builder-shell-input:focus-visible),
	:global(.builder-panel-shell--dark .builder-shell-select:focus-visible),
	:global(.builder-panel-shell--dark .builder-shell-field input:focus-visible),
	:global(.builder-panel-shell--dark .builder-shell-field select:focus-visible),
	:global(.builder-panel-shell--dark .builder-shell-field textarea:focus-visible) {
		border-color: var(--builder-shell-accent-soft);
	}

	:global(.builder-shell-select) {
		padding-inline-end: 1.75rem;
		background-image:
			linear-gradient(45deg, transparent 50%, var(--builder-shell-gray-500) 50%),
			linear-gradient(135deg, var(--builder-shell-gray-500) 50%, transparent 50%);
		background-position:
			calc(100% - 12px) calc(50% - 1px),
			calc(100% - 7px) calc(50% - 1px);
		background-size: 5px 5px, 5px 5px;
		background-repeat: no-repeat;
		appearance: none;
	}

	:global(.builder-panel-shell--dark .builder-shell-select),
	:global(.builder-panel-shell--dark .builder-shell-field select) {
		background-image:
			linear-gradient(45deg, transparent 50%, var(--builder-shell-dark-text-muted) 50%),
			linear-gradient(135deg, var(--builder-shell-dark-text-muted) 50%, transparent 50%);
	}

	:global(.builder-panel-shell--dark .builder-shell-select option),
	:global(.builder-panel-shell--dark .builder-shell-field select option) {
		background: var(--builder-shell-dark-field);
		color: var(--builder-shell-dark-text);
	}

	:global(.builder-shell-field) {
		display: grid;
		gap: 0.3rem;
	}

	:global(.builder-shell-field span) {
		font-size: 10px;
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--builder-shell-text-muted);
	}

	:global(.builder-panel-shell--dark .builder-shell-field span) {
		color: var(--builder-shell-dark-text-subtle);
	}

	:global(.builder-shell-badge) {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-height: 18px;
		padding: 0 0.5rem;
		border-radius: var(--builder-shell-radius-pill);
		background: var(--builder-shell-panel-bg-muted);
		color: var(--builder-shell-gray-500);
		font-size: 10px;
		font-weight: 600;
		letter-spacing: 0.04em;
	}

	:global(.builder-shell-badge--accent) {
		background: var(--builder-shell-accent-surface);
		color: var(--builder-shell-accent-text);
	}

	:global(.builder-shell-badge--neutral) {
		background: var(--builder-shell-panel-bg-muted);
		color: var(--builder-shell-gray-500);
	}

	:global(.builder-shell-badge--dark) {
		background: rgba(0, 0, 0, 0.04);
		color: var(--builder-shell-toolbar-text);
	}

	:global(.builder-panel-shell--dark .builder-shell-badge) {
		border: 1px solid rgba(0, 0, 0, 0.06);
		background: rgba(0, 0, 0, 0.03);
		color: var(--builder-shell-dark-text-muted);
	}

	:global(.builder-panel-shell--dark .builder-shell-badge--accent) {
		border-color: rgba(0, 113, 227, 0.25);
		background: rgba(0, 113, 227, 0.08);
		color: #0071e3;
	}

	:global(.builder-panel-shell--dark .builder-shell-badge--neutral) {
		background: rgba(0, 0, 0, 0.03);
		color: var(--builder-shell-dark-text-muted);
	}

	:global(.builder-panel-shell--dark .builder-shell-badge--dark) {
		border-color: var(--builder-shell-dark-border-strong);
		background: rgba(0, 0, 0, 0.06);
		color: var(--builder-shell-dark-text);
	}

	:global(.builder-shell-card) {
		border: 1px solid var(--builder-shell-border);
		border-radius: var(--builder-shell-radius-lg);
		background: #ffffff;
		box-shadow: none;
		overflow: hidden;
	}

	:global(.builder-shell-card--subtle) {
		background: var(--builder-shell-panel-bg-muted);
	}

	:global(.builder-panel-shell--dark .builder-shell-card) {
		border-color: var(--builder-shell-dark-border);
		background: var(--builder-shell-dark-panel-raised);
		color: var(--builder-shell-dark-text);
	}

	:global(.builder-panel-shell--dark .builder-shell-card--subtle) {
		background: var(--builder-shell-dark-panel-subtle);
	}

	:global(.builder-panel-shell--dark .builder-shell-card.active),
	:global(.builder-panel-shell--dark .builder-shell-card[aria-selected='true']) {
		border-color: rgba(0, 113, 227, 0.38);
		background: #e6f0fa;
	}

	:global(.builder-shell-empty-state) {
		display: grid;
		place-items: center;
		gap: 0.45rem;
		min-block-size: 96px;
		padding: var(--builder-shell-space-16);
		border: 1px dashed var(--builder-shell-border-strong);
		border-radius: var(--builder-shell-radius-lg);
		background: var(--builder-shell-panel-bg-muted);
		color: var(--builder-shell-text-muted);
		text-align: center;
	}

	:global(.builder-panel-shell--dark .builder-shell-empty-state),
	:global(.builder-panel-shell--dark .builder-shell-card--subtle.builder-shell-lazy-panel__placeholder) {
		border-color: var(--builder-shell-dark-border);
		background: rgba(0, 0, 0, 0.02);
		color: var(--builder-shell-dark-text-muted);
	}

	:global(.builder-shell-action-row) {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: var(--builder-shell-space-6);
	}

	:global(.builder-shell-button--compact),
	:global(.builder-shell-action-row .builder-shell-button) {
		min-height: var(--builder-shell-control-height-sm);
		height: var(--builder-shell-control-height-sm);
		padding-inline: 0.5rem;
		font-size: 11px;
	}

	:global(.builder-shell-icon-badge) {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 24px;
		height: 24px;
		border: 1px solid var(--builder-shell-border);
		border-radius: var(--builder-shell-radius-lg);
		background: #ffffff;
		color: var(--builder-shell-gray-600);
		flex-shrink: 0;
	}

	:global(.builder-panel-shell--dark .builder-shell-icon-badge) {
		border-color: var(--builder-shell-dark-border);
		background: rgba(0, 0, 0, 0.03);
		color: var(--builder-shell-dark-text-muted);
	}

	:global(.builder-shell-scrollbar) {
		scrollbar-width: thin;
		scrollbar-color: var(--builder-shell-gray-300) transparent;
	}

	:global(.builder-shell-scrollbar::-webkit-scrollbar) {
		width: 10px;
		height: 10px;
	}

	:global(.builder-shell-scrollbar::-webkit-scrollbar-thumb) {
		border: 2px solid transparent;
		border-radius: 999px;
		background: var(--builder-shell-gray-300);
		background-clip: padding-box;
	}

	:global(.builder-shell-scrollbar::-webkit-scrollbar-track) {
		background: transparent;
	}
</style>
