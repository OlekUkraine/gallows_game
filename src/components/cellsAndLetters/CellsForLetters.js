import React from 'react';

import './CellsForLetters.css';
import {CellForLetter} from "../cellAndLetter/CellForLetter";

const CellsForLetters = ({word}) => {

    return (
        <div className={'CellsForLetters'}>
            <div className={'word'} id={'word'}>
                {
                    word.map((cell, index) => <CellForLetter key={index} withLetter={cell} index={index}/> )
                }
            </div>
        </div>
    );
};

export {CellsForLetters};