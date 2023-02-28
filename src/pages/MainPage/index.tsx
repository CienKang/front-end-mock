import React, { useEffect, useState } from 'react';
import './MainPage.css';

import { GenreSongs, SongData } from '../../types';
import makeRequest from '../../utils/makeRequest';
import { authToken, GET_ALL_SONGS_DATA } from '../../constants/EndPoints';
import { useNavigate } from 'react-router-dom';
import CardsContainer from '../../components/CardsContainer';
import { GenreName, GridSelector } from '../../components';


const MainPage = () => {
    const [allSongs, setAllSongs] = useState<SongData[]>([]);
    const [genres, setGenres] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [filteredSongs, setFilteredSongs] = useState<GenreSongs>({});

    const navigate = useNavigate();

    const [isGrid, setIsGrid] = useState<boolean>(false);

    useEffect(() => {
        makeRequest({ ...GET_ALL_SONGS_DATA },
            { headers: { 'Authorization': authToken } },
            navigate
        ).then(res => {
            setAllSongs(res.data);
            setGenres(res.data.map((song: SongData) => song.genre.name).filter((genre: string, index: number, arr: string[]) => arr.indexOf(genre) === index));
            setFilteredSongs(res.data.reduce((acc: GenreSongs, song: SongData) => {
                if (acc[song.genre.name]) {
                    acc[song.genre.name].push(song);
                } else {
                    acc[song.genre.name] = [song];
                }
                return acc;
            }, {}));
            setIsLoading(false);
        });

    }, []);
    if (!isLoading)
        return (
            <div className='main-page-container'>
                <div className='main-page-section'>
                    <GridSelector isGrid={isGrid} setIsGrid={setIsGrid} />
                    {!isGrid && <CardsContainer allSongs={allSongs} setAllSongs={setAllSongs} />}
                    {
                        isGrid && genres.map((genre: string, index: number) => {
                            return (
                                <div key={index} >
                                    <GenreName genre={genre} />
                                    <CardsContainer allSongs={filteredSongs[genre]} setAllSongs={setAllSongs} />
                                </div>
                            );
                        })

                    }
                </div>
            </div>
        );
    else return (<div>
        <p>loading...</p>
    </div>);
};

export default MainPage;