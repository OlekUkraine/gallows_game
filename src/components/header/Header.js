import React from 'react';

import './Header.css';
import {ButtonForGame} from "../buttons/ButtonForGame";

const Header = () => {
    return (
        <div className={'Header'}>
            <ButtonForGame buttonName={'game'}/>
            <ButtonForGame buttonName={'main'}/>
            <h1>G A L L O W S</h1>
            <ButtonForGame buttonName={'settings'}/>
        </div>
    );
};

export {Header};