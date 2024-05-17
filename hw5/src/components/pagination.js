import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
import {Button, Typography} from "@mui/material";

const Pagination = ({ basePath, currentPage, totalPages }) => {
    const currentPageInt = parseInt(currentPage);

    return (
        <div className="pagination-container">
            {currentPageInt > 0 && (
                <Button
                    component={Link}
                    to={`${basePath}/page/${currentPageInt - 1}`}
                    className="pagination-button"
                    variant="contained"
                >
                    Previous
                </Button>
            )}
            <Typography className="pagination-text">
                Page {currentPageInt} of {totalPages - 1}
            </Typography>
            {currentPageInt < totalPages - 1 && (
                <Button
                    component={Link}
                    to={`${basePath}/page/${currentPageInt + 1}`}
                    className="pagination-button"
                    variant="contained"
                >
                    Next
                </Button>
            )}
        </div>
    );
};

export default Pagination;
