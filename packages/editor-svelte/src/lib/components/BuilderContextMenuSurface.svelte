<script lang="ts">
	import { onDestroy } from 'svelte';

	import { DropdownMenu } from '../vendor/bits-dropdown-menu';
	import { squircle } from '../squircle';
	import type { BuilderContextMenuAction, BuilderContextMenuGroup } from '../context-menu';

	export let open = false;
	export let groups: BuilderContextMenuGroup[] = [];
	export let style: string | undefined = undefined;
	export let registerElement: ( element?: HTMLDivElement ) => void = () => {};
	export let onAction: ( action: BuilderContextMenuAction ) => void = () => {};
	export let onOpenChange: ( open: boolean ) => void = () => {};

	let contentElement: HTMLDivElement | null = null;
	let squircleAction: ReturnType<typeof squircle> | null = null;

	$: registerElement( open ? ( contentElement ?? undefined ) : undefined );

	// Apply squircle to context menu container when it mounts
	$: if ( contentElement && open && !squircleAction ) {
		squircleAction = squircle( contentElement, { radius: 12, n: 5 } );
	}
	$: if ( ( !open || !contentElement ) && squircleAction ) {
		squircleAction?.destroy?.();
		squircleAction = null;
	}

	onDestroy( () => {
		squircleAction?.destroy?.();
		registerElement( undefined );
	} );

	function handleSelect( action: BuilderContextMenuAction ) {
		if ( action.disabled ) {
			return;
		}

		onAction( action );
	}

	function getItemClass( action: BuilderContextMenuAction ) {
		return action.tone === 'danger'
			? 'builder-shell__context-menu-item builder-shell__context-menu-item--danger'
			: 'builder-shell__context-menu-item';
	}
</script>

{#if open}
	<DropdownMenu.Root
		open={open}
		onOpenChange={onOpenChange}
		_internal_variant="context-menu"
	>
		<DropdownMenu.ContentStatic
			bind:ref={contentElement}
			class="builder-shell__context-menu"
			role="menu"
			aria-label="Element actions"
			tabindex={-1}
			{style}
		>
			{#each groups as group, groupIndex (group.id)}
				<DropdownMenu.Group class="builder-shell__context-menu-group" aria-label={group.id}>
					{#each group.items as action (action.id)}
						<DropdownMenu.Item
							class={getItemClass( action )}
							disabled={action.disabled}
							textValue={action.label}
							onSelect={() => handleSelect( action )}
						>
							<span>{action.label}</span>
						</DropdownMenu.Item>
					{/each}
				</DropdownMenu.Group>

				{#if groupIndex < groups.length - 1}
					<DropdownMenu.Separator class="builder-shell__context-menu-separator" />
				{/if}
			{/each}
		</DropdownMenu.ContentStatic>
	</DropdownMenu.Root>
{/if}

<style>
	:global(.builder-shell__context-menu) {
		position: fixed;
		z-index: 40;
		display: grid;
		gap: 0;
		min-width: 250px;
		padding: 6px 0;
		border: none;
		border-radius: 12px;
		background: #ffffff;
		box-shadow: inset 0 0 0 1px var(--builder-shell-border), 0 10px 25px rgba(0, 0, 0, 0.16);
		transform: translate(0, 0);
	}

	:global(.builder-shell__context-menu-group) {
		display: grid;
		gap: 0;
	}

	:global(.builder-shell__context-menu-separator) {
		block-size: 1px;
		margin: 0;
		background: rgba(204, 213, 224, 0.9);
	}

	:global(.builder-shell__context-menu-item) {
		display: flex;
		align-items: center;
		width: 100%;
		min-height: 34px;
		padding: 0 14px;
		border: 0;
		background: transparent;
		color: #44546a;
		font-size: 13px;
		line-height: 1.3;
		text-align: left;
		cursor: pointer;
	}

	:global(.builder-shell__context-menu-item:hover),
	:global(.builder-shell__context-menu-item:focus-visible) {
		background: #f3f5f8;
		color: #1f2937;
		outline: none;
	}

	:global(.builder-shell__context-menu-item:disabled) {
		cursor: not-allowed;
		opacity: 0.5;
	}

	:global(.builder-shell__context-menu-item--danger) {
		color: #aa1844;
	}
</style>
