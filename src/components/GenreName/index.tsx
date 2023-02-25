import React from 'react';
import { GenreNameProps } from '../../types';
import './GenreName.css';

const GenreName = ({ genre }: GenreNameProps) => {
    return (
        <div className="genre-logo-header">
            <img src={`/assets/genre-${genre}.png`} alt={genre} />
            <p>{genre.toLowerCase()}</p>
        </div>
    );
};

export default GenreName;