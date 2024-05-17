import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
    Box,
    Grid,
    Typography,
    Button,
    Card,
    CardContent,
} from "@mui/material";
import axios from "axios";
import Pagination from "./pagination";

import BackToTopButton from "./backToTop";
import RenderObject from "./renderObject";
import Search from "./search";
import '../App.css';
import FetchDataById from "./fetchDataById";
import GetBreadcrumbs from "./breadCrumbs";


function Payloads() {
    const [loading, setLoading] = useState(true);
    const [payloadListData, setPayloadListData] = useState([]);
    const [payloadData, setPayloadData] = useState(undefined);
    const { page, id } = useParams();
    const navigate = useNavigate();
    const [totalPages, setTotalPages] = useState(0);
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
            navigate('/payloads/page/0');
        }
    };

    useEffect(() => {
        async function getPayloads() {
            try {
                if (id) {
                    let { data: payload } = await axios.get(`https://api.spacexdata.com/v4/payloads/${id}`);

                    if(payload.launch) {
                        payload.launch = await FetchDataById('launches', payload.launch);
                    }
                    setPayloadData(payload);
                } else {
                    const { data: allPayloadData } = await axios.get(`https://api.spacexdata.com/v4/payloads`);
                    let filteredPayloads = allPayloadData;

                    if (searchTerm) {
                        filteredPayloads = allPayloadData.filter(payload =>
                            payload.name.toLowerCase().includes(searchTerm.toLowerCase())
                        );
                    }

                    const totalPages = Math.ceil(filteredPayloads.length / 10);
                    setTotalPages(totalPages);
                    const pageNum = parseInt(page) || 0;

                    if (pageNum >= totalPages) {
                        navigate('/notfound');
                        return;
                    } else {
                        const startIndex = pageNum * 10;
                        setPayloadListData(filteredPayloads.slice(startIndex, startIndex + 10));
                    }
                }
            } catch (e) {
                navigate('/notfound');
                console.log(e);
            } finally {
                setLoading(false);
            }
        }
        getPayloads();
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
            {id && payloadData ? (
                <Card className= 'card-container'>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {payloadData.name}
                        </Typography>
                        <RenderObject obj={payloadData} toggleExpandKey={toggleExpandKey}
                                      expandedKeys={expandedKeys}/>
                    </CardContent>
                </Card>
            ) : (
                <>
                    <Typography variant="h4" gutterBottom component="div">
                        {searchTerm ? "Search Results:" : "Payload List:"}
                    </Typography>
                    <Grid container spacing={2} justifyContent="center">
                        {payloadListData.map((payload) => (
                            <Grid item key={payload.id} xs={6} sm={4} md={3} lg={2} xl={2.4} className = 'grid-item'>
                                <Card className = 'card-list'>
                                    <CardContent>
                                        <Typography variant="h5" component="div">{payload.name}</Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {payload.type}
                                        </Typography>
                                    </CardContent>
                                    <Button component={Link} to={`/payloads/${payload.id}`} variant="contained">
                                        More Info
                                    </Button>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    {!id && totalPages > 1 && (
                        <Box className= 'page-box'>
                            <Pagination basePath="/payloads" currentPage={page} totalPages={totalPages} />
                        </Box>
                    )}
                </>
            )}
            <BackToTopButton/>
        </Box>
    );
}

export default Payloads;