import React, {useEffect, useState} from 'react';
import './CellsForLetters.css';
import {CellForLetter} from "../cellForLetter/CellForLetter";
import {wordService} from "../../services/word.service";
import {wordsForGame} from "../../assets/arrWords/arrWords";

const CellsForLetters = ({word}) => {

    return (
        <div className={'CellsForLetters'}>
            <div className={'word'}>
                {
                    word.map((cell, index) => <CellForLetter withLetter={cell} index={index}/> )
                }
            </div>
        </div>
    );
};

export {CellsForLetters};