import {configureStore} from "@reduxjs/toolkit";

import wordReducer from "./slices/word.slice";
import letterReducer from "./slices/letter.slice";
import fieldReducer from "./slices/field.slice";

const store = configureStore({
        reducer: {
            word: wordReducer,
            letter: letterReducer,
            field: fieldReducer,
        }
    }
)

export default store;