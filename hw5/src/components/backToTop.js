import React from 'react';
import { Fab, useScrollTrigger, Zoom } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const BackToTopButton = ({
                             threshold = 100,
                             bottom = '2rem',
                             right = '2rem',
                             color = 'secondary',
                             size = 'small'
                         }) => {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: threshold,
    });

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <Zoom in={trigger}>
            <Fab
                color={color}
                size={size}
                onClick={handleClick}
                sx={{
                    position: 'fixed',
                    bottom: bottom,
                    right: right,
                }}
            >
                <ArrowUpwardIcon />
            </Fab>
        </Zoom>
    );
};

export default BackToTopButton;
