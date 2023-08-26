import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    field: 1,
    openLetter: 1,
    youWin: false,
    youFailed: false,
    allSelectedLetters: [],
    checkWord: [],
    isCheckLetter: '',
}

const fieldSlice = createSlice({
    name: 'fieldSlice',
    initialState,
    reducers: {
        createCheckWord:(state, action) => {
            const getWordArray = action.payload;
            state.checkWord = [...getWordArray];
        },

        letterChecking:(state, action) => {
            const {selectedLetter} = action.payload;
            const wordArr = state.checkWord;
            const isLetter = wordArr.indexOf(selectedLetter.toLowerCase());

            if (!state.allSelectedLetters.length) {
                state.allSelectedLetters.push(wordArr[0]);
            }

            const isAlready = state.allSelectedLetters.indexOf(selectedLetter.toLowerCase());

            if (isAlready < 0) {
                state.allSelectedLetters.push(selectedLetter.toLowerCase());

                if (isLetter < 0) {
                    state.field = state.field + 1;

                    if (state.field === 11) {
                        state.youFailed = true;
                    }
                }

                if (isLetter >= 0) {

                    for (let i = 0; i < wordArr.length; i++) {
                        if (wordArr[i] === selectedLetter.toLowerCase()) {
                            state.isCheckLetter = selectedLetter.toLowerCase();
                            state.openLetter = state.openLetter + 1;
                        }

                        if (state.openLetter === wordArr.length) {
                            state.youWin = true;
                        }
                    }
                }
            }
        }
    }
})

const fieldReducer = fieldSlice.reducer;
export const {letterChecking, createCheckWord} = fieldSlice.actions;
export default fieldReducer;