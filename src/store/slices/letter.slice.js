import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    letter: []
}

const letterSlice = createSlice({
    name: 'letterSlice',
    initialState,
})

const letterReducer = letterSlice.reducer;

export default letterReducer;