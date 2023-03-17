import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from "../../store/store";
import { BrowserRouter } from 'react-router-dom';
import Home from './home';
import { act } from "react-dom/test-utils";
import { setShowSpinner } from '../../store/spinner-slice';

describe('Home Component', () => {

    test('Home is rendered correctly', () => {

        render(<Provider store={store}><BrowserRouter><Home /></BrowserRouter></Provider>);
        
        act(() => {
            store.dispatch(setShowSpinner(false));
        });

        const el = screen.getByText('MyReads');

        expect(el).toBeInTheDocument();

    });
});