import React from 'react';
import { FirstInfo } from './components/FirstInfo/FirstInfo';
import { Hero } from './components/Hero/Hero';
import { NavBar } from './components/NavBar/NavBar';

const App = () => {
    return (
        <div className='h-[300vh] text-white'>
            <NavBar />
            <Hero />
            <FirstInfo />
        </div>
    );
};

export default App;
