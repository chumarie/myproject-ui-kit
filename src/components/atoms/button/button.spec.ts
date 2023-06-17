import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/svelte';
import { test } from 'vitest';

import Button from './Button.svelte';

describe('Button component', () => {
	test('shows the todo text when rendered', () => {
		render(Button, { label: 'test', size: 'large', backgroundColor: 'primary' });

		expect(screen.getByText('test')).toBeInTheDocument(); // checkbox
	});

	test('renders a button with a background color when backgroundColor is set', () => {
		const { getByText } = render(Button, {
			label: 'Test Button',
			size: 'large',
			backgroundColor: 'primary'
		});

		const button = getByText('Test Button');
		expect(button.style.backgroundColor).toBe('');
	});
});
