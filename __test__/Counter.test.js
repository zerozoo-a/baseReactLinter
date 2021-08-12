import React from 'react';
import {render, screen} from '@testing-library/react';
import Counter from '../src/components/counter/Counter';

it('render Counter Component Header',()=>{
	const component = render(<Counter />);
	expect(screen.getByTestId('counterHeader')).toBeInTheDocument();
})