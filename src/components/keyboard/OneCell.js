import React, {useState} from 'react';
import {useDispatch} from "react-redux";

import './KeyboardForGame.css';
import {letterChecking} from "../../store/slices/field.slice";

const OneCell = ({letter}) => {
    const dispatch = useDispatch();
    const createdNumber = Math.floor(Math.random() * 3);
    const stateImage = require(`../../assets/images/letter-box_${createdNumber + 1}.png`);
    const [isWork, setIsWork] = useState(false);

    const clickToLetter = () => {
        dispatch(letterChecking({selectedLetter: letter}));
        setIsWork(() => true);
    }

    return (
        <div className={isWork ? 'disable-letter' : 'OneCell'}>
            <img src={stateImage} alt={''}/>
            <div className={`abc`} onClick={!isWork ? () => clickToLetter() : null}>{letter}</div>
        </div>
    );
};

export default OneCell;