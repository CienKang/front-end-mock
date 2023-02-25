import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ErrorPage.css';
const ErrorPage = () => {

    const navigate = useNavigate();
    const handleSyncClick = () => {
        navigate('/');
    };

    return (
        <div className='error-container'>
            <p>:((</p>
            <p>seems a bit empty in here...</p>
            <button onClick={handleSyncClick}>sync</button>
        </div>
    );
};

export default ErrorPage;