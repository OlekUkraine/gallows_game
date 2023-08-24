import React from 'react';
import {useSelector} from "react-redux";

import './GameField.css';

const GameField = () => {
    const { field } = useSelector(store => store.field);
    const stateImage = require(`../../assets/images/gallows_${field}.png`);

    return (
        <div className={'GameField'}>
            <img
                src={stateImage}
                alt={`state_${field}`}
            />
        </div>
    );
};

export {GameField};