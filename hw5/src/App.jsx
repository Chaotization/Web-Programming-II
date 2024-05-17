import React from "react";
import {Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/home";
import Cores from "./components/cores";
import Launches from "./components/launches";
import Launchpads from "./components/launchpads";
import Payloads from "./components/payloads";
import Rockets from "./components/rockets";
import Ships from "./components/ships";
import NotFound from './components/notFound';
import logo from './img/logo.jpg';
import backgroundImg from './img/background.jpg';
import Menu from "./components/menu";
import './App.css';


const App = () => {
    return (
        <div className="App" style={{ backgroundImage: `url(${backgroundImg})` }}>
            <header className="App-header">
                <Menu />
                <Link to="/" className="logo-link">
                    <img src={logo} className="App-logo" alt="logo" />
                </Link>
            </header>

            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/launches/page/:page" element={<Launches/>}/>
                <Route path="/launches/:id" element={<Launches/>}/>
                <Route path="/payloads/page/:page" element={<Payloads/>}/>
                <Route path="/payloads/:id" element={<Payloads/>}/>
                <Route path="/cores/page/:page" element={<Cores/>}/>
                <Route path="/cores/:id" element={<Cores/>}/>
                <Route path="/rockets/page/:page" element={<Rockets/>}/>
                <Route path="/rockets/:id" element={<Rockets/>}/>
                <Route path="/ships/page/:page" element={<Ships/>}/>
                <Route path="/ships/:id" element={<Ships/>}/>
                <Route path="/launchpads/page/:page" element={<Launchpads/>}/>
                <Route path="/launchpads/:id" element={<Launchpads/>}/>
                <Route path="/notfound" element={<NotFound/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </div>
    );
};

export default App;