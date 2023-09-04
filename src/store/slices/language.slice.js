import {createSlice} from "@reduxjs/toolkit";
import {enLanguage, uaLanguage} from "../../constants/en_ua";

const initialState = {
    language: localStorage.getItem('language') || 'UA',
    uaOrEnLanguage: localStorage.getItem('language') === 'UA'? {...uaLanguage}: {...enLanguage},
}

const languageSlice = createSlice({
    name: 'languageSlice',
    initialState,
    reducers: {
        toggleLanguage:(state, action) => {
            state.language = action.payload;

            switch (state.language) {
                case 'UA':
                    state.uaOrEnLanguage = {...uaLanguage};
                    break;
                case 'EN':
                    state.uaOrEnLanguage = {...enLanguage};
                    break;
            }
        }
    },
})

const languageReducer = languageSlice.reducer;

export const {toggleLanguage} = languageSlice.actions;

export default languageReducer;