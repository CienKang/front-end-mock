import React  from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ErrorPage from '../index';
import * as router from 'react-router';

const navigate = jest.fn();
beforeEach(() => {
    jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
});

describe('ErrorPage', () => {

    it('should render the component correctly with error message shown and a button when encountered any error',()=>{
        render(<ErrorPage/>);
        expect(screen.getByText(/:\(\(/i)).toBeTruthy();
        expect(screen.getByText(/seems a bit empty in here.../i)).toBeTruthy();
        expect(screen.getByRole('button', {  name: /sync/i})).toBeTruthy();
    });

    it('should redirect to main page when the sync button is clicked',()=>{
        render(<ErrorPage />);
        expect(navigate).not.toBeCalled();
        fireEvent.click(screen.getByRole('button', {  name: /sync/i}));
        expect(navigate).toBeCalledWith('/');
    });

    it('should match with the previous snapshots',()=>{
        const {asFragment} = render(<ErrorPage/>);
        expect(asFragment()).toMatchSnapshot();
    });
});
