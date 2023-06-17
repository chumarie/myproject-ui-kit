import type { Meta, StoryObj } from '@storybook/svelte';

import Button from './Button.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
export default {
	title: 'Example/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: {
			control: { type: 'select' },
			options: ['primary', 'secondary', 'success', 'grey']
		},
		size: {
			control: { type: 'select' },
			options: ['small', 'medium', 'large']
		},
		opacity: { control: 'number' }
	}
} as Meta;

type Story = StoryObj;

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args

export const Secondary: Story = {
	args: {
		label: 'Button',
		backgroundColor: 'secondary'
	}
};

export const Large: Story = {
	args: {
		size: 'large',
		label: 'Button'
	}
};

export const Small: Story = {
	args: {
		size: 'small',
		label: 'Button'
	}
};
