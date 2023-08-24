import React, {useEffect, useState} from 'react';

import './CellForLetter.css';

const CellForLetter = ({withLetter, index}) => {
    const [theme, setTheme] = useState('active');
    const createdNumber = Math.floor(Math.random() * 3);
    const stateImage = require(`../../assets/images/letter-box_${createdNumber + 1}.png`);

    useEffect(() => {
        setTheme( index? '': 'active');
    }, []);

    return (
        <div className={`CellForLetter`}>
            <img src={stateImage} alt={''}/>
            <div className={`letter ${theme}`}>{withLetter}</div>
        </div>
    );
};

export {CellForLetter};