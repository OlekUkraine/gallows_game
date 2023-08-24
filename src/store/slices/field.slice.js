import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    field: 1,
    openLetter: 1,
    youWin: false,
    youFailed: false,
    allSelectedLetters: [],
}

const fieldSlice = createSlice({
    name: 'fieldSlice',
    initialState,
    reducers: {
        letterChecking:(state, action) => {

            const {selectedLetter, word} = action.payload;
            const wordArr = word.word.split('');
            const isLetter = wordArr.indexOf(selectedLetter.toLowerCase());
            const isAlready = state.allSelectedLetters.indexOf(selectedLetter.toLowerCase());


            console.log(selectedLetter, word, isLetter, isAlready, state.allSelectedLetters.length);

            if (isAlready < 0) {
                if (isLetter < 0) {
                    console.log('state.field >>>', state.field)
                    state.field = state.field + 1;

                    if (state.field === 11) {
                        state.youFailed = true;
                    }
                }

                if (isLetter >= 0 && isAlready < 0) {
                    state.allSelectedLetters.push(selectedLetter.toLowerCase());

                    for (let i = 0; i < wordArr.length; i++) {
                        if (wordArr[i] === selectedLetter.toLowerCase()) {
                            const elementsDom = document.getElementById('word');
                            console.log(elementsDom.children[i].children[1])

                            const getElement = elementsDom.children[i].children[1];
                            getElement.classList.toggle('active');
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
export const {letterChecking} = fieldSlice.actions;
export default fieldReducer;