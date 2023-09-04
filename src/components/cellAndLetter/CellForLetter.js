import React, {useEffect, useState} from 'react';

import './CellForLetter.css';
import {useSelector} from "react-redux";

const CellForLetter = ({withLetter, index}) => {
    const [background, setBackground] = useState('');
    const [addImage, setAddImage] = useState('');
    const { isCheckLetter } = useSelector(store => store.field);

    useEffect(() => {
        const createdNumber = Math.floor(Math.random() * 3);
        setAddImage(require(`../../assets/images/letter-box_${createdNumber + 1}.png`));
    }, [])

    useEffect(() => {
        if (withLetter === isCheckLetter || !index) {
            setBackground('active');
        }
    }, [isCheckLetter])

    return (
        <div className={`CellForLetter`}>
            <img src={addImage} alt={''}/>
            <div className={`letter ${background}`}>{withLetter}</div>
        </div>
    );
};

export {CellForLetter};