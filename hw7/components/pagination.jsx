import React from 'react';
import { Link } from 'next/link';
import { Button, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const Pagination = ({ basePath, currentPage, totalPages }) => {
    const currentPageInt = parseInt(currentPage);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center space-x-4 mt-8"
        >
            {currentPageInt > 0 && (
                <Button
                    component={Link}
                    href={`${basePath}/page/${currentPageInt - 1}`}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded shadow transition duration-300"
                    variant="contained"
                >
                    Previous
                </Button>
            )}
            <Typography variant="body1" className="text-gray-600">
                Page {currentPageInt} of {totalPages}
            </Typography>
            {currentPageInt < totalPages && (
                <Button
                    component={Link}
                    href={`${basePath}/page/${currentPageInt + 1}`}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded shadow transition duration-300"
                    variant="contained"
                >
                    Next
                </Button>
            )}
        </motion.div>
    );
};

export default Pagination;
