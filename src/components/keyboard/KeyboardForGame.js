import React from 'react';

import './KeyboardForGame';
import OneCell from "./OneCell";
import {Abc} from "../../constants/Abc";

const KeyboardForGame = () => {
    return (
        <div className={'KeyboardForGame'}>
            {
                Abc.map((value, index) => <OneCell key={index} letter={value}/>)
            }
        </div>
    );
};

export {KeyboardForGame};