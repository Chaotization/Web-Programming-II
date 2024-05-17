import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { HiMenu } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

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
    const buttonRef = useRef(null);
    const [buttonPosition, setButtonPosition] = useState({});

    const handleLinkClick = () => setIsExpanded(false);

    useEffect(() => {
        if (buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            setButtonPosition({
                top: rect.bottom + window.scrollY,
                left: rect.left + window.scrollX,
            });
        }
    }, [isExpanded]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (buttonRef.current && !buttonRef.current.contains(event.target)) {
                setIsExpanded(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='relative' ref={buttonRef}>
            <button
                className="text-gray-600 hover:text-gray-800 focus:outline-none"
                onClick={() => setIsExpanded(!isExpanded)}
                aria-label="Menu"
            >
                <HiMenu className="w-6 h-6" />
            </button>
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        style={{
                            position: 'absolute',
                            top: `${buttonPosition.top}px`,
                            left: `${buttonPosition.left}px`,
                            zIndex: 50,
                        }}
                    >
                        <div className="w-48 bg-white rounded-md shadow-md overflow-hidden">
                            {routes.map((route, index) => (
                                <Link key={index} href={route.path} passHref>
                                    <span
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                                        onClick={handleLinkClick}
                                    >
                                        {route.label}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Menu;