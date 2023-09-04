import React from 'react';
import './ButtonForGame.css';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const ButtonForGame = ({buttonName}) => {
    const { uaOrEnLanguage } = useSelector(state => state.language);
    return (
            <NavLink to={buttonName}>
                <div className={'ButtonForGame'}>
                    {uaOrEnLanguage[buttonName]}
                </div>
            </NavLink>
    );
};

export {
    ButtonForGame
};