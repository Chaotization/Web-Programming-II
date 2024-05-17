import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home.jsx';
import Artists from './components/Artists.jsx';
import logo from './assets/logo.png';
import './App.css';
import Albums from "./components/Albums.jsx";
import Companies from "./components/Companies.jsx";
import Songs from "./components/Songs.jsx";
import Search from "./components/Search.jsx";


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Link to="/" className="logo-link">
                    <img src={logo} className="App-logo" alt="logo" />
                </Link>

            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/artists" element={<Artists />} />
                <Route path="/artists/:id" element={<Artists />} />
                <Route path="/albums" element={<Albums />} />
                <Route path="/albums/:id" element={<Albums />} />
                <Route path="/companies" element={<Companies />} />
                <Route path="/companies/:id" element={<Companies />} />
                <Route path="/songs/:id" element={<Songs />} />
                <Route path="/search" element={<Search />} />
            </Routes>
        </div>
    );
}

export default App;