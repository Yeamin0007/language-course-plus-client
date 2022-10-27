import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Bars/Footer/Footer';
import Header from '../../Bars/Header/Header';
import './Main.css'

const Main = () => {
    return (
        <div className='first'>
        
            <Header></Header>
            <Outlet></Outlet>
    
            <div className='second'>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;