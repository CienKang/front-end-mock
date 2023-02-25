import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components';
import { ErrorPage, MainPage } from './pages';

function App() {
    return (
        <div className='all'>
            <Header />
            <BrowserRouter >
                <Routes >
                    <Route path='/' element={<MainPage />} />
                    <Route path='/error' element={<ErrorPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;