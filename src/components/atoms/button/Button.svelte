<script lang="ts">
	export let primary = false;
	export let backgroundColor: string | undefined = undefined;
	export let size: 'small' | 'medium' | 'large' = 'medium';
	export let label: string = '';

	$: mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
	$: style = backgroundColor ? `background-color: ${backgroundColor}` : '';
</script>

<div class="text-4xl">
	<button
		type="button"
		class={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
		on:click
		{style}
	>
		<span class="underline">{label}</span>
	</button>
</div>
