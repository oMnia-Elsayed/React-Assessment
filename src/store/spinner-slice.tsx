import { createSlice } from "@reduxjs/toolkit";

const initialState: {showSpinner: boolean} = {
    showSpinner: false,
};

const spinnerSlice = createSlice({
    name: 'spinner',
    initialState,
    reducers: {
        setShowSpinner: (state, action) => {
            state.showSpinner = action.payload
        }
    }
});

export const { setShowSpinner } = spinnerSlice.actions;

export default spinnerSlice.reducer;