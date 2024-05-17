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

function Launchpads() {
    const [loading, setLoading] = useState(true);
    const [launchpadListData, setLaunchpadListData] = useState([]);
    const [launchpadData, setLaunchpadData] = useState(undefined);
    const { page, id } = useParams();
    const navigate = useNavigate();
    const [totalPages, setTotalPages] = useState(0);
    const regex = /(<([^>]+)>)/gi;
    const [expandedKeys, setExpandedKeys] = useState({});

    const toggleExpandKey = (path) => {
        setExpandedKeys(prev => ({
            ...prev,
            [path]: !prev[path],
        }));
    };

    useEffect(() => {
        async function getLaunchpads() {
            try {
                if (id) {
                    const { data: launchpad } = await axios.get(`https://api.spacexdata.com/v4/launchpads/${id}`);
                    if (launchpad.rockets.length > 0) {
                        launchpad.rockets = await Promise.all(launchpad.rockets.map(rocketId => FetchDataById('rockets', rocketId))).then(data => data.filter(Boolean));
                    }

                    if (launchpad.launches.length > 0) {
                        launchpad.launches = await Promise.all(launchpad.launches.map(launchId => FetchDataById('launches', launchId))).then(data => data.filter(Boolean));
                    }
                    setLaunchpadData(launchpad);
                } else {
                    const { data: allLaunchpadsData } = await axios.get(`https://api.spacexdata.com/v4/launchpads`);
                    const totalPages = Math.ceil(allLaunchpadsData.length / 10);
                    const pageNum = parseInt(page) || 0;
                    if(pageNum > totalPages - 1) {
                        navigate('/notfound');
                    }else{
                        setTotalPages(totalPages);
                        const startIndex = pageNum * 10;
                        setLaunchpadListData(allLaunchpadsData.slice(startIndex, startIndex + 10));
                    }
                }
            } catch (e) {
                navigate('/notfound');
                console.log(e);
            } finally {
                setLoading(false);
            }
        }
        getLaunchpads();
    }, [id, navigate, page]);


    if (loading) {
        return <Typography variant="h4" align="center">Loading...</Typography>;
    }

    return (
        <Box className = 'main-box'>
            <GetBreadcrumbs/>
            {id && launchpadData ? (
                <Card className= 'card-individual'>
                    <CardMedia
                        component="img"
                        image={launchpadData.images?.large[0] || noImg}
                        alt={`Launch patch for ${launchpadData.full_name}`}
                        sx={{height: 300, objectFit: 'contain'}}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {launchpadData.full_name}
                        </Typography>
                        <RenderObject obj={launchpadData} toggleExpandKey={toggleExpandKey}
                                      expandedKeys={expandedKeys}/>
                    </CardContent>
                </Card>
            ) : (
                <>
                    <Typography variant="h4" gutterBottom component="div">
                        {"Launchpad List:"}
                    </Typography>
                    <Grid container spacing={2} justifyContent="center">
                        {launchpadListData.map((launchpad) => (
                            <Grid item key={launchpad.id} xs={12} sm={6} md={4} lg={15 / 5} xl={12 / 5} className = 'grid-item'>
                                <Card className= 'card-list'>
                                    <CardMedia
                                        component="img"
                                        image={launchpad.images?.large[0] || noImg}
                                        alt={`Launch patch for ${launchpad.full_name}`}
                                        sx={{ height: 200, objectFit: 'contain', mx: 'auto' }}
                                    />
                                    <CardContent>
                                        <Typography variant="h5" component="div">{launchpad.full_name}</Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {launchpad.details ? launchpad.details.replace(regex, '').substring(0, 50) + '...' : 'No details available'}
                                        </Typography>

                                    </CardContent>
                                    <Button component={Link} to={`/launchpads/${launchpad.id}`} variant="contained">More Info</Button>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    {!id && totalPages > 1 && (
                        <Box className= 'page-box'>
                            <Pagination basePath="/launchpads" currentPage={page} totalPages={totalPages} />
                        </Box>
                    )}
                </>
            )}
            <BackToTopButton/>
        </Box>
    );
}

export default Launchpads;
