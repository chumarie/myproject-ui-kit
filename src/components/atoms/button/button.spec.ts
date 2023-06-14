import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/svelte';
import { test } from 'vitest';

import Button from './Button.svelte';

describe('Button component', () => {
	const buttonProps = { label: 'test', size: 'large', backgroundColor: 'red', primary: true };
	test('shows the todo text when rendered', () => {
		render(Button, { props: { ...buttonProps } });

		expect(screen.getByText('test')).toBeInTheDocument(); // checkbox
	});

	test('changes classes based on the primary and size props', async () => {
		const { container } = render(Button, {
			props: { primary: true, size: 'large' }
		});

		// Affichage du HTML du rendu
		console.log(container.innerHTML);

		const button = container.querySelector('.storybook-button--primary');
		expect(button).toBeInTheDocument();
	});

	test('renders a button with a background color when backgroundColor is set', () => {
		const { getByText } = render(Button, { label: 'Test Button', backgroundColor: 'red' });

		const button = getByText('Test Button');

		expect(button.style.backgroundColor).toBe('red');
	});
});
