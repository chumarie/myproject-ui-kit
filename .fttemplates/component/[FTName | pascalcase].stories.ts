import type { Meta, StoryObj } from '@storybook/svelte';

import <FTName | pascalcase> from './<FTName | pascalcase>.svelte';

const meta = {
	title: 'Example/<FTName | pascalcase>',
	component: <FTName | pascalcase>,
	tags: ['autodocs'],
	argTypes: {
	}
} as Meta;

export default meta;
type Story = StoryObj;

export const test: Story = {
	args: {
		label: 'test',
	}
};