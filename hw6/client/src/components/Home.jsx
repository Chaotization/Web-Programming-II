import React from "react";
import '../App.css'
import { Link } from "react-router-dom";
import albumImg from '../assets/albums.png';
import artistsImg from '../assets/artists.png';
import backgroundImg from '../assets/background.png';
import recordCompaniesImg from '../assets/companies.png';

function HomePage() {
    return (
        <div className="Home" style={{ backgroundImage: `url(${backgroundImg})` }}>
            <header className="Home-header">
                <h1 className='home-title'>Welcome to DbIM</h1>
                <div className="icons-container">
                    <Link to="/artists" className="artistIcon">
                        <img src={artistsImg} alt="Artists"/>
                    </Link>
                    <Link to="/albums" className="albumIcon">
                        <img src={albumImg} alt="Albums"/>
                    </Link>
                    <Link to="/companies" className="companyIcon">
                        <img src={recordCompaniesImg} alt="Record Companies"/>
                    </Link>
                </div>
            </header>
        </div>
    );
}

export default HomePage;
