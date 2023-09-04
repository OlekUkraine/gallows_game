import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    theme: localStorage.getItem('theme') || 'light',
}

const themeSlice = createSlice({
    name: 'themeSlice',
    initialState,
    reducers: {
        toggleTheme:(state, action) => {
            state.theme = action.payload;
        }
    },
})

const themeReducer = themeSlice.reducer;

export const {toggleTheme} = themeSlice.actions;

export default themeReducer;