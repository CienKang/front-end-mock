import React from 'react';
import { render,screen } from '@testing-library/react';
import App from './App';

describe('App', () => {

    it('should render the component correctly and show header text when launched',()=>{
        render(<App/>);
        
        expect(screen.getByRole('banner')).toBeTruthy();
        expect(screen.getByText(/my shelf/i)).toBeTruthy();
        expect(screen.getByText(/record/i)).toBeTruthy();
    });

    it('should match with the previous snapshots',()=>{
        const {asFragment} = render(<App/>);
        expect(asFragment()).toMatchSnapshot();
    });

});