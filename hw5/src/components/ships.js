import React, { useEffect, useState } from 'react';
import noImg from '../img/No_image.jpg';
import {Link, useNavigate, useParams} from 'react-router-dom';
import {
    Box,
    Grid,
    Typography,
    Button,
    Card,
    CardContent,
    CardMedia,
} from "@mui/material";
import axios from "axios";
import Pagination from "./pagination";
import RenderObject from "./renderObject";
import FetchDataById from "./fetchDataById";
import BackToTopButton from "./backToTop";
import GetBreadcrumbs from "./breadCrumbs";

function Ships() {
    const [loading, setLoading] = useState(true);
    const [shipListData, setShipListData] = useState([]);
    const [shipData, setShipData] = useState(undefined);
    const { page, id } = useParams();
    const [totalPages, setTotalPages] = useState(0);
    const navigate = useNavigate();
    const regex = /(<([^>]+)>)/gi;
    const [expandedKeys, setExpandedKeys] = useState({});

    const toggleExpandKey = (path) => {
        setExpandedKeys(prev => ({
            ...prev,
            [path]: !prev[path],
        }));
    };

    useEffect(() => {
        async function getShips() {
            try {
                if (id) {
                    const { data: ship } = await axios.get(`https://api.spacexdata.com/v4/ships/${id}`);
                    if (ship.launches.length > 0) {
                        ship.launches = await Promise.all(ship.launches.map(launchId => FetchDataById('launches', launchId))).then(data => data.filter(Boolean));
                    }
                    setShipData(ship);
                } else {
                    const { data: allShipsData } = await axios.get(`https://api.spacexdata.com/v4/ships`);
                    const totalPages = Math.ceil(allShipsData.length / 10);
                    const pageNum = parseInt(page) || 0;
                    if(pageNum > totalPages - 1) {
                        navigate('/notfound');
                        return;
                    }else{
                        setTotalPages(totalPages);
                        const startIndex = pageNum * 10;
                        setShipListData(allShipsData.slice(startIndex, startIndex + 10));
                    }
                }
            } catch (e) {
                navigate('/notfound');
                console.log(e);
            } finally {
                setLoading(false);
            }
        }
        getShips();
    }, [id, navigate, page]);

    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    if (loading) {
        return <Typography variant="h4" align="center">Loading...</Typography>;
    }

    return (

        <Box className = 'main-box'>
            <GetBreadcrumbs/>
            {id && shipData ? (
                <Card className= 'card-individual'>
                    <CardMedia
                        component="img"
                        image={shipData.image || noImg}
                        alt={shipData.name}
                        sx={{height: 300, objectFit: 'contain'}}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {shipData.name}
                        </Typography>
                        <RenderObject obj={shipData} toggleExpandKey={toggleExpandKey}
                                      expandedKeys={expandedKeys}/>
                        {shipData.link && (
                            <Button
                                variant="contained"
                                onClick={() => openInNewTab(shipData.link)}
                            >
                                External Link
                            </Button>
                        )}
                    </CardContent>
                </Card>
            ) : (
                <>
                    <Typography variant="h4" gutterBottom component="div">
                        {"Ship List:"}
                    </Typography>
                    <Grid container spacing={2} justifyContent="center">
                        {shipListData.map((ship) => (
                            <Grid item key={ship.id} xs={6} sm={4} md={3} lg={2} xl={2.4} className = 'grid-item'>
                                <Card className= 'card-list'>
                                    <CardMedia
                                        component="img"
                                        image={ship.image || noImg}
                                        alt={`Launch patch for ${ship.name}`}
                                        sx={{height: 200, objectFit: 'contain', mx: 'auto'}}
                                    />
                                    <CardContent>
                                        <Typography variant="h5" component="div">{ship.name}</Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {ship.home_port ? ship.home_port.replace(regex, '').substring(0, 100) + '...' : 'No details available'}
                                        </Typography>

                                    </CardContent>
                                    <Button component={Link} to={`/ships/${ship.id}`} variant="contained">More Info</Button>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    {!id && totalPages > 1 && (
                        <Box className= 'page-box'>
                            <Pagination basePath="/ships" currentPage={page} totalPages={totalPages} />
                        </Box>
                    )}
                </>
            )}
            <BackToTopButton/>
        </Box>
    );
}

export default Ships;
