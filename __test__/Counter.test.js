import React from 'react';
import {render, screen} from '@testing-library/react';
import {Counter} from '../src/components/counter/Counter';
import '@testing-library/jest-dom';


it('render Counter Component Header',()=>{
	render(<Counter />);
	// expect(screen.getByTestId('counterHeader')).toBeInTheDocument();
	const ele = screen.getByTestId('counterHeader');
	expect(ele).toBeInTheDocument();
})