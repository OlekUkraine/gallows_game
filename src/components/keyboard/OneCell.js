import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import './KeyboardForGame.css';
import {letterChecking} from "../../store/slices/field.slice";

const OneCell = ({letter}) => {
    const dispatch = useDispatch();
    const { word } = useSelector(store => store.word);

    const createdNumber = Math.floor(Math.random() * 3);
    const stateImage = require(`../../assets/images/letter-box_${createdNumber + 1}.png`);

    return (
        <div className={'OneCell'}>
            <img src={stateImage} alt={''}/>
            <div className={`abc`} onClick={() => dispatch(letterChecking({selectedLetter: letter, word}))}>{letter}</div>
        </div>
    );
};

export default OneCell;