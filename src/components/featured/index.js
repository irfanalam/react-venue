import React from 'react';
import Carrosel from './Carrousel';
import TimeUntill from './TimeUntill';

const Featured = () => {
    return (
        <div style={{position: 'relative'}}>
            <Carrosel />
            <div className="artist_name">
                <div className="wrapper">
                    Ariana Grande
                </div>
            </div>
            <TimeUntill />
        </div>
    );
};

export default Featured;