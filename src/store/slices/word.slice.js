import {createSlice} from "@reduxjs/toolkit";
import {wordService} from "../../services/word.service";

const initialState = {
    word: {
        // id: 15,
        // word: null,
        // description: null,
    },
    wordArray: [],
    wordDescription: '',
}

const wordSlice = createSlice({
    name: 'wordSlice',
    initialState,
    reducers: {
        getWord:(state, action) => {
            const word = wordService.createWordAndDescription(action.payload);

            state.wordArray = word.word.split('');
            state.wordDescription = word.description;
        }
    }
})

const wordReducer = wordSlice.reducer;

export const {getWord} = wordSlice.actions;

export default wordReducer;