import React from 'react';
import { CardsDataProps } from '../../types';
import Card from '../Card';
import './CardsContainer.css';


const CardsContainer = (props: CardsDataProps) => {
    return (
        <div className='cards-container'>
            {props.allSongs.map((song, index) => {
                return <Card song={song} key={index} />;
            })
            }
        </div>
    );
};

export default CardsContainer;