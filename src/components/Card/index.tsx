import React, { useEffect, useState } from 'react';
import { CardDataProp } from '../../types';
import './Card.css';
import heartGray from '../../assets/heart-gray.svg';
import heartRed from '../../assets/heart-red.svg';
import makeRequest from '../../utils/makeRequest';
import { GET_LIKES_OF_SONG, UPDATE_A_SONG } from '../../constants/EndPoints';
import { useNavigate } from 'react-router-dom';

const Card = ({ song }: CardDataProp) => {

    const [isLiked, setIsLiked] = useState<boolean>(false);
    const [likes, setLikes] = useState<number>(0);
    const navigate = useNavigate();

    useEffect(() => {
        makeRequest({ ...GET_LIKES_OF_SONG(song.id) }, navigate).then(res => {
            setLikes(res.data.count);
            setIsLiked(res.data.like);
        });
    }, []);

    const handleLike = () => {
        makeRequest({ ...UPDATE_A_SONG(song.id) }, { data: { like: !isLiked } }).then(res => {
            console.log(res);
        });

        setIsLiked(!isLiked);
        setLikes(isLiked ? likes - 1 : likes + 1);

    };

    return (
        <div className='card'>
            <img src={song.imageUrl} alt={song.imageUrl} />
            <div className='card-details'>
                <div className='card-details-name'>
                    <p>{song.name}</p>
                    <p>{song.artist.name}</p>
                </div>
                <div className="card-like" onClick={handleLike}>
                    <img src={isLiked ? heartRed : heartGray} alt="Snow" />
                    <div className="centered">{likes}</div>
                </div>
            </div>
        </div>
    );
};

export default Card;