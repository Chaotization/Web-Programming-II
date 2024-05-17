import React from "react";
import { Breadcrumbs, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link, useLocation } from "react-router-dom";

function GetBreadcrumbs() {
    const location = useLocation();
    const path = location.pathname.split("/").filter(x => x && x !== "page" && !x.startsWith("0"));

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function isListRoute(segment) {
        const listRoutes = ['launches', 'payloads', 'cores', 'rockets', 'ships', 'launchpads'];
        return listRoutes.includes(segment.toLowerCase());
    }

    function isNonClickableListRoute(segment, index) {
        if (!isListRoute(segment)) return false;
        let checkRoute = `/${path.slice(0, index + 1).join('/')}/page/0`;
        return location.pathname.toLowerCase().startsWith(checkRoute.toLowerCase());
    }

    const breadcrumbs = path.map((segment, index) => {
        const isLast = index === path.length - 1;
        let routeTo = `/${path.slice(0, index + 1).join('/')}`;

        if (isListRoute(segment) && !isLast) {
            routeTo += "/page/0";
        }

        const isNonClickable = isNonClickableListRoute(segment, index);

        return {
            name: segment,
            routeTo,
            isLast,
            clickable: !isNonClickable,
        };
    });

    return (
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />} sx={{ mb: 2 }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'blue' }}>Home</Link>
            {breadcrumbs.map(({ name, routeTo, isLast, clickable }, index) => {
                const displayText = capitalizeFirstLetter(name);
                if (!isLast && clickable) {
                    return (
                        <Link key={index} to={routeTo} style={{ textDecoration: 'none', color: 'blue' }}>
                            {displayText}
                        </Link>
                    );
                }

                return (
                    <Typography key={index} color="text.primary" style={{ color: 'white' }}>
                        {displayText}
                    </Typography>
                );
            })}
        </Breadcrumbs>
    );
}

export default GetBreadcrumbs;