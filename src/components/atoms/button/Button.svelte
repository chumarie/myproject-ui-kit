<script lang="ts">
	//import './button.css';

	export let backgroundColor: 'primary' | 'secondary' | 'success' = 'primary';
	export let size: 'small' | 'medium' | 'large' = 'medium';

	export let label = '';
	//export let opacity: number | undefined = 1;
</script>

<button
	type="button"
	class={[
		'rounded-md text-white capitalize py-3 px-8 text-base leading-6',
		`storybook-button--${size}`,
		`bg-${backgroundColor}`
	].join(' ')}
	on:click
>
	{label}
</button>
