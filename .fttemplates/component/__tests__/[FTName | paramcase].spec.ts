import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/svelte';

import <FTName | pascalcase> from './<FTName | pascalcase>.svelte';

describe('<FTName | pascalcase> component', () => {
	const <FTName | lowercasefirstchar>Props = {};

	test('component is render coorectly', () => {
		render(<FTName | pascalcase>, { props: { ...<FTName | lowercasefirstchar>Props } });
	});

});

