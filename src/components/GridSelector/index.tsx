import React from 'react';
import bars from '../../assets/icon-genre.svg';
import grid from '../../assets/icon-grid.svg';
import { GridSelectorProps } from '../../types';

const GridSelector = ({ isGrid, setIsGrid }: GridSelectorProps) => {

    const handleGridChange = () => {
        setIsGrid(!isGrid);
    };

    return (
        <div className='main-page-header'>
            <p>{!isGrid ? 'all songs' : 'genres'}</p>
            <img src={!isGrid ? bars : grid} alt='toggle' onClick={handleGridChange} />
        </div>
    );
};

export default GridSelector;