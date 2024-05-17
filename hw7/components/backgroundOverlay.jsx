import React from 'react';

const BackgroundOverlay = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-[-1]">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-pink-500 opacity-75"></div>
            <div className="absolute inset-0 "></div>
        </div>
    );
};

export default BackgroundOverlay;
