import {configureStore} from "@reduxjs/toolkit";

import wordReducer from "./slices/word.slice";
import letterReducer from "./slices/letter.slice";
import fieldReducer from "./slices/field.slice";
import themeReducer from "./slices/theme.slice";
import languageReducer from "./slices/language.slice";

const store = configureStore({
        reducer: {
            word: wordReducer,
            letter: letterReducer,
            field: fieldReducer,
            theme: themeReducer,
            language: languageReducer,
        }
    }
)

export default store;