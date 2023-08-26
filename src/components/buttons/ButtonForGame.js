import React from 'react';
import './ButtonForGame.css';
import {NavLink} from "react-router-dom";

const ButtonForGame = ({buttonName}) => {
    return (
            <NavLink to={buttonName}>
                <div className={'ButtonForGame'}>
                    {buttonName}
                </div>
            </NavLink>
    );
};

export {
    ButtonForGame
};