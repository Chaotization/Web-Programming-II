import React, { useEffect, useState } from 'react';
import noImg from '../img/No_image.jpg';
import {Link, useNavigate , useParams} from 'react-router-dom';
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
import BackToTopButton from "./backToTop";
import Pagination from "./pagination";
import RenderObject from "./renderObject";
import GetBreadcrumbs from "./breadCrumbs";

function Rockets() {
    const [loading, setLoading] = useState(true);
    const [rocketListData, setRocketListData] = useState([]);
    const [rocketData, setRocketData] = useState(undefined);
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
        async function getRockets() {
            try {
                if (id) {
                    const { data: rocket } = await axios.get(`https://api.spacexdata.com/v4/rockets/${id}`);
                    setRocketData(rocket);

                } else {
                    const { data: allRocketsData } = await axios.get(`https://api.spacexdata.com/v4/rockets`);
                    const totalPages = Math.ceil(allRocketsData.length / 10);
                    const pageNum = parseInt(page) || 0;
                    if (pageNum >= totalPages) {
                        navigate('/notfound');
                        return;
                    }else{
                        setTotalPages(totalPages);
                        const startIndex = pageNum * 10;
                        setRocketListData(allRocketsData.slice(startIndex, startIndex + 10));
                    }
                }
            } catch (e) {
                navigate('/notfound');
                console.log(e);
            } finally {
                setLoading(false);
            }
        }

        getRockets();
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
            {id && rocketData ? (
                <Card className= 'card-individual'>
                    <CardMedia
                        component="img"
                        image={rocketData.flickr_images.length > 0 ? rocketData.flickr_images[0] : noImg}
                        alt={`Launch patch for ${rocketData.name}`}
                        sx={{height: 300, objectFit: 'contain'}}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {rocketData.name}
                        </Typography>
                        <RenderObject obj={rocketData} toggleExpandKey={toggleExpandKey}
                                      expandedKeys={expandedKeys}/>
                        {rocketData.wikipedia && (
                            <Button
                                variant="contained"
                                onClick={() => openInNewTab(rocketData.wikipedia)}
                            >
                                Read Wikipedia
                            </Button>
                        )}
                    </CardContent>
                </Card>
            ) : (
                <>
                    <Typography variant="h4" gutterBottom component="div">
                        {"Rocket List:"}
                    </Typography>
                    <Grid container spacing={2} justifyContent="center">
                        {rocketListData.map((rocket) => (
                            <Grid item key={rocket.id} xs={12} sm={6} md={4} lg={15 / 5} xl={12 / 5} className = 'grid-item'>
                                <Card className= 'card-list'>
                                    <CardMedia
                                        component="img"
                                        image={rocket.flickr_images.length > 0 ? rocket.flickr_images.join(',') : noImg}
                                        alt={`Launch patch for ${rocket.name}`}
                                        sx={{ height: 200, objectFit: 'contain', mx: 'auto'}}
                                    />
                                    <CardContent>
                                        <Typography variant="h5" component="div">{rocket.name}</Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {rocket.description ? rocket.description.replace(regex, '').substring(0, 100) + '...' : 'No details available'}
                                        </Typography>
                                    </CardContent>
                                    <Button component={Link} to={`/rockets/${rocket.id}`} variant="contained">More Info</Button>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    {!id && totalPages > 1 && (
                        <Box className= 'page-box'>
                            <Pagination basePath="/rockets" currentPage={page} totalPages={totalPages} />
                        </Box>
                    )}
                </>
            )}
            <BackToTopButton/>
        </Box>
    );
}

export default Rockets;
