import React from 'react';
import Slider from "react-slick";

import slide_1 from '../../resources/images/slide_one.jpg'
import slide_2 from '../../resources/images/slide_two.jpg'
import slide_3 from '../../resources/images/slide_three.jpg'

const Carrousel = () => {

    const setting = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
    }

    return (
        <div 
            className="carrosel_wrapper"
            style={{
                overflow: 'hidden',
                height: `${window.innerHeight}px`,
            }}
        >
            <Slider {...setting}>
                <div>
                    <div
                        className="carrosel_image"
                        style={{
                            background: `url(${slide_1})`,
                            height: `${window.innerHeight}px`,
                        }}
                    >
                    </div>
                </div>
                <div>
                    <div
                        className="carrosel_image"
                        style={{
                            background: `url(${slide_2})`,
                            height: `${window.innerHeight}px`,
                        }}
                    >
                    </div>
                </div>
                <div>
                    <div
                        className="carrosel_image"
                        style={{
                            background: `url(${slide_3})`,
                            height: `${window.innerHeight}px`,
                        }}
                    >
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Carrousel;