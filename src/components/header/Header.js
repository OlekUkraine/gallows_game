import React from 'react';

import './Header.css';
import {ButtonForGame} from "../buttons/ButtonForGame";
import {useSelector} from "react-redux";

const Header = () => {
    const { uaOrEnLanguage } = useSelector(state => state.language);
    return (
        <div className={'Header'}>
            <ButtonForGame buttonName={'game'}/>
            <h1>{uaOrEnLanguage.gallows}</h1>
            <ButtonForGame buttonName={'main'}/>
        </div>
    );
};

export {Header};