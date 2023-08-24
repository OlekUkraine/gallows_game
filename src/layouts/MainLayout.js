import React from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "../components/header/Header";
import {Footer} from "../components/footer/Footer";
import './MainLayout.css';

const MainLayout = () => {
    return (
        <div className={'MainLayout'}>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export {MainLayout};