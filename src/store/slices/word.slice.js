import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    word: {
        id: 15,
        word: null,
        description: null,
    },
    wordArray: [],
    wordDescription: '',
}

const wordSlice = createSlice({
    name: 'wordSlice',
    initialState,
    reducers: {
        getWord:(state, action) => {
                const randomIndex = Math.floor(Math.random() * 10);
                state.word = action.payload[randomIndex];

            state.wordArray = state.word.word.split('');
            state.wordDescription = state.word.description;
        }
    }
})

const wordReducer = wordSlice.reducer;

export const {getWord} = wordSlice.actions;

export default wordReducer;