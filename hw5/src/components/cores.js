import React, { useEffect, useState } from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import {
    Box,
    Grid,
    Typography,
    Button,
    Card,
    CardContent,
} from "@mui/material";
import axios from "axios";

import BackToTopButton from "./backToTop";
import Pagination from "./pagination";
import RenderObject from "./renderObject";
import Search from "./search";
import FetchDataById from "./fetchDataById";
import GetBreadcrumbs from "./breadCrumbs";

function Cores() {
    const [loading, setLoading] = useState(true);
    const [coreListData, setCoreListData] = useState([]);
    const [coreData, setCoreData] = useState(undefined);
    const { page, id } = useParams();
    const [totalPages, setTotalPages] = useState(0);
    const navigate = useNavigate();
    const [expandedKeys, setExpandedKeys] = useState({});
    const [searchTerm, setSearchTerm] = useState('');
    const toggleExpandKey = (path) => {
        setExpandedKeys(prev => ({
            ...prev,
            [path]: !prev[path],
        }));
    };

    const updateSearchTerm = (newSearchTerm) => {
        setSearchTerm(newSearchTerm);
        if (page !== '0' && newSearchTerm !== '') {
            navigate('/cores/page/0');
        }
    };

    useEffect(() => {
        async function getCores() {
            try {
                if (id) {
                    const { data: core } = await axios.get(`https://api.spacexdata.com/v4/cores/${id}`);
                    if (core.launches.length > 0) {
                        core.launches = await Promise.all(core.launches.map(launchId => FetchDataById('launches', launchId))).then(data => data.filter(Boolean));
                    }
                    setCoreData(core);
                } else {
                    const { data: allCoresData } = await axios.get(`https://api.spacexdata.com/v4/cores`)
                    
                    let filteredCores = allCoresData;
                    if (searchTerm) {
                        filteredCores = allCoresData.filter(core =>
                            core.serial.toLowerCase().includes(searchTerm.toLowerCase())
                        );
                    }

                    const totalPages = Math.ceil(filteredCores.length / 10);
                    setTotalPages(totalPages);
                    const pageNum = parseInt(page) || 0;

                    if (pageNum >= totalPages) {
                        navigate('/notfound');
                        return;
                    } else {
                        const startIndex = pageNum * 10;
                        setCoreListData(filteredCores.slice(startIndex, startIndex + 10));
                    }
                }
            } catch (e) {
                navigate('/notfound');
                console.log(e);
            } finally {
                setLoading(false);
            }
        }
        getCores();
    }, [id, navigate, page, searchTerm]);


    if (loading) {
        return <Typography variant="h4" align="center">Loading...</Typography>;
    }

    return (
        <Box className = 'main-box'>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginRight: 2 }}>
                {!id && <Search onSearchChange={updateSearchTerm} initialValue={searchTerm}/>}
            </Box>
            <GetBreadcrumbs/>
            {id && coreData ? (
                <Card className= 'card-individual'>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {coreData.serial}
                        </Typography>
                        <RenderObject obj={coreData} toggleExpandKey={toggleExpandKey}
                                      expandedKeys={expandedKeys}/>
                    </CardContent>
                </Card>
            ) : (
                <>
                    <Typography variant="h4" gutterBottom component="div">
                        {searchTerm ? "Search Results:" : "Core List:"}
                    </Typography>
                    <Grid container spacing={2} justifyContent="center">
                        {coreListData.map((core) => (
                            <Grid item key={core.id} xs={6} sm={4} md={3} lg={2} xl={2.4} className = 'grid-item'>
                                <Card className= 'card-list'>
                                    <CardContent >
                                        <Typography variant="h5" component="div">{core.serial}</Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {core.status}
                                        </Typography>
                                    </CardContent>
                                    <Button component={Link} to={`/cores/${core.id}`} variant="contained">
                                        More Info
                                    </Button>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    {!id && totalPages > 1 && (
                        <Box className= 'page-box'>
                            <Pagination basePath="/cores" currentPage={page} totalPages={totalPages} />
                        </Box>
                    )}
                </>
            )}
            <BackToTopButton/>
        </Box>
    );
}

export default Cores;