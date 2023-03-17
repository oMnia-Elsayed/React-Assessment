import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from "../../store/store";
import { BrowserRouter } from 'react-router-dom';
import NotFound from './not-found';

describe('NotFound Component', () => {

    test('NotFound is rendered correctly', () => {

        render(<Provider store={store}><BrowserRouter><NotFound/></BrowserRouter></Provider>);

        const el = screen.getByText('404 Not Found !!.');

        expect(el).toBeInTheDocument();

    });
});