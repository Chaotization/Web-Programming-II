import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const routes = [
    { path: "/launches/page/0", label: "Launches" },
    { path: "/payloads/page/0", label: "Payloads" },
    { path: "/cores/page/0", label: "Cores" },
    { path: "/rockets/page/0", label: "Rockets" },
    { path: "/ships/page/0", label: "Ships" },
    { path: "/launchpads/page/0", label: "Launchpads" },
];

const Menu = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const handleLinkClick = () => {
        setIsExpanded(false);
    };

    return (
        <div className='menu-icon'>
            <IconButton onClick={() => setIsExpanded(!isExpanded)} color="inherit" className="menu-icon" aria-label="menu">
                <MenuIcon />
            </IconButton>
            {isExpanded && (
                <div className="roulette-menu">
                    <div className="menu-items">
                        {routes.map((route, index) => (
                            <div className="roulette-item" key={index} onClick={handleLinkClick}>
                                <Link to={route.path}>{route.label}</Link>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Menu;
