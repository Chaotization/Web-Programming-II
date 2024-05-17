import React from "react";
import { Breadcrumbs, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Link from 'next/link';
import { useRouter } from 'next/router';

function GetBreadcrumbs() {
    const router = useRouter();
    const path = router.asPath.split("/").filter(x => x && x !== "page" && !x.startsWith("0"));

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
        return router.asPath.toLowerCase().startsWith(checkRoute.toLowerCase());
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
            <Link href="/" passHref>
                {"Home"}
            </Link>
            {breadcrumbs.map(({ name, routeTo, isLast, clickable }, index) => {
                const displayText = capitalizeFirstLetter(name);
                if (!isLast && clickable) {
                    return (
                        <Link key={index} href={routeTo} passHref>
                            {displayText}
                        </Link>
                    );
                }

                return (
                    <Typography key={index} color="text.primary" >
                        {displayText}
                    </Typography>
                );
            })}
        </Breadcrumbs>
    );
}

export default GetBreadcrumbs;
