import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from "../../store/store";
import { BrowserRouter } from 'react-router-dom';
import ErrorComponent from './error';

describe('Error Component', () => {

    test('Error is rendered correctly', () => {

        render(<Provider store={store}><BrowserRouter><ErrorComponent/></BrowserRouter></Provider>);

        const el = screen.getByText('Something Went Wrong, try again later ‼️');

        expect(el).toBeInTheDocument();

    });
});