import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';
import banner1 from '../../../assets/banner/banner1.png';
import banner2 from '../../../assets/banner/banner2.png';
import banner3 from '../../../assets/banner/banner3.png';
import banner4 from '../../../assets/banner/banner4.png';
import banner5 from '../../../assets/banner/banner5.png';
import banner6 from '../../../assets/banner/banner6.png';

const Banner = () => {
    return (
        <div className="relative">
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showThumbs={false}
                interval={5000}
                transitionTime={500}
            >
                <div>
                    <img src={banner1} alt="Banner 1" />
                </div>
                <div>
                    <img src={banner2} alt="Banner 2" />
                </div>
                <div>
                    <img src={banner3} alt="Banner 3" />
                </div>
                <div>
                    <img src={banner4} alt="Banner 4" />
                </div>
                <div>
                    <img src={banner5} alt="Banner 5" />
                </div>
                <div>
                    <img src={banner6} alt="Banner 6" />
                </div>
            </Carousel>
           
        </div>
    );
};

export default Banner;
