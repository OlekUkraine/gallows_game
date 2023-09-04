import React from 'react';

import './MainPage.css';
import {useDispatch, useSelector} from "react-redux";
import * as themeActions from "../../store/slices/theme.slice";
import * as languageActions from "../../store/slices/language.slice";



const MainPage = () => {
    const { theme } = useSelector(state => state.theme);
    const { language } = useSelector(state => state.language);
    const { uaOrEnLanguage } = useSelector(state => state.language);
    const dispatch = useDispatch();

    const toggleTheme = () => {
        const localTheme = theme === 'light'? 'dark': 'light';
        dispatch(themeActions.toggleTheme(localTheme));
        localStorage.setItem('theme', localTheme);
    };
    
    const whatLanguage = () => {
        const localLanguage = language === 'UA'? 'EN': 'UA';
        dispatch(languageActions.toggleLanguage(localLanguage));
        localStorage.setItem('language', localLanguage);
    };

    const difficulty = () => {

    };

    console.log(theme);
    console.log(language);

    return (
        <div className={'MainPage'}>
            <div className={'block'}>
                <div className={'button btn-theme'} onClick={() => toggleTheme()}>{uaOrEnLanguage.theme}</div>
                <div className={'context'}>{theme.toUpperCase()}</div>
            </div>

            <div className={'block'}>
                <div className={'button btn-language'} onClick={() => whatLanguage()}>{uaOrEnLanguage.language}</div>
                <div className={'context'}>{language}</div>
            </div>

            <div className={'block'}>
                <div className={'button btn-settings'} onClick={() => difficulty()}>{uaOrEnLanguage.difficulty}</div>
            </div>
        </div>
    );
};

export default MainPage;