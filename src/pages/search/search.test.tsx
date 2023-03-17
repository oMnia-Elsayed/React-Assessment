import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from "../../store/store";
import { BrowserRouter } from 'react-router-dom';
import SearchPage from './search';
import { act } from 'react-dom/test-utils';
import { setShowSpinner } from '../../store/spinner-slice';

describe('Search Component', () => {

    test('Search is rendered correctly', () => {

        render(<Provider store={store}><BrowserRouter><SearchPage/></BrowserRouter></Provider>);

        act(() => {
            store.dispatch(setShowSpinner(false));
        });
        
        // const el = screen.getByText(' Add a book');

        // expect(el).toBeInTheDocument();

    });
});