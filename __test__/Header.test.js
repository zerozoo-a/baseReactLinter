import React from 'react';
import {render,cleanup, screen} from '@testing-library/react';
// import render from 'react-test-renderer';
import App from '../src/App';
import { expect } from '@jest/globals';

it('test1',()=>{
	render(<App />);
	const linkEle = screen.getByText(/hello world!/i);
})



