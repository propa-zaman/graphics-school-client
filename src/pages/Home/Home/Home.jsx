import React from 'react';
import Banner from '../Banner/Banner';
import useTitle from '../../../hooks/useTitle';
import PopularClass from '../PopularClass/PopularClass';
import PopularInstructor from '../PopularInstructor/PopularInstructor';
import Featured from '../Featured/Featured';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
            <Featured></Featured>
        </div>
    );
};

export default Home;