import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import './GamePage.css';
import {GameField} from "../../components/gameField/GameField";
import {CellsForLetters} from "../../components/cellsAndLetters/CellsForLetters";
import {wordsForGame} from "../../memo/database/arrWords/arrWords";
import {KeyboardForGame} from "../../components/keyboard/KeyboardForGame";
import {getWord} from "../../store/slices/word.slice";

const GamePage = () => {
    const dispatch = useDispatch();
    const { wordArray, wordDescription: description } = useSelector(store => store.word);
    const { youWin, youFailed } = useSelector(store => store.field);


    console.log('GAME PAGE')

    useEffect(() => {
            dispatch(getWord({...wordsForGame}));
        }, []);

    if (youWin) {
        return (
            <div className={'GamePage'}>
            <div className={'game-over'}> Y O U - W I N ! </div>
                <div className={'game-over'}>
                    TAK, ЦЕ СЛОВО -
                </div>
                <h1 className={'game-over'}>
                    {
                        wordArray.join('')
                    }
                </h1>
            </div>
        )
    }

    if (youFailed) {
        return (
            <div className={'GamePage'}>
            <GameField/>
            <div className={'game-over'}> Y O U - F A I L E D ! </div>
            </div>
        )
    }

    return (
        <div className={'GamePage'}>
            <GameField/>
            <CellsForLetters word={wordArray}/>
            <div className={'info'}>{description}</div>
            <KeyboardForGame/>
        </div>
    );
};

export {GamePage};