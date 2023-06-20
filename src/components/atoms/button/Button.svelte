<script lang="ts">
	import clsx from 'clsx';

	export let backgroundColor: 'primary' | 'secondary' | 'success' = 'primary';
	export let size: 'small' | 'medium' | 'large' = 'medium';

	export let label = '';
	//export let opacity: number | undefined = 1;
</script>

<button
	type="button"
	class={clsx(
		'rounded-md text-white capitalize py-3 px-8 text-base leading-6 ',
		`storybook-button--${size}`,
		backgroundColor === 'primary' && 'bg-primary',
		backgroundColor === 'secondary' && 'bg-secondary',
		backgroundColor === 'success' && 'bg-success'
	)}
	on:click
>
	{label}
</button>
