import React from 'react';
import Banner from '../Banner/Banner';
import TravelService from '../TravelService/TravelService';
import Team from '../Team/Team';
import About from '../About/About';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TravelService />
            <About></About>
            <Team></Team>
            <Contact></Contact>
        </div>
    );
};

export default Home;