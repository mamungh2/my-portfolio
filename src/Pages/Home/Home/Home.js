import React from 'react';
import About from '../About/About';
import HeaderBanner from '../HeaderBanner/HeaderBanner';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <HeaderBanner></HeaderBanner>
            <Projects></Projects>
            <About></About>
        </div>
    );
};

export default Home;