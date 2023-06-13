import React from 'react';
import Banner from '../Banner/Banner';
import useTitle from '../../../hooks/useTitle';
import PopularClass from '../PopularClass/PopularClass';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <PopularClass></PopularClass>
        </div>
    );
};

export default Home;