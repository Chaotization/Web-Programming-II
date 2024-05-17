import React, {useEffect, useState} from 'react';
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
import Pagination from './pagination';
import BackToTopButton from "./backToTop";
import RenderObject from "./renderObject";
import Search from "./search";
import FetchDataById from "./fetchDataById";
import '../App.css';
import GetBreadcrumbs from "./breadCrumbs";

function Launches() {
    const [loading, setLoading] = useState(true);
    const [launchListData, setLaunchListData] = useState([]);
    const [launchData, setLaunchData] = useState(undefined);
    const {page, id} = useParams();
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
            navigate('/launches/page/0');
        }
    };

    useEffect(() => {
        async function getLaunches() {
            try {
                if (id) {
                    let {data: launch} = await axios.get(`https://api.spacexdata.com/v4/launches/${id}`);
                    if (launch.rocket) {
                        launch.rocket = await FetchDataById('rockets', launch.rocket);
                    }

                    if (launch.ships.length > 0) {
                        launch.ships = await Promise.all(launch.ships.map(shipId => FetchDataById('ships', shipId))).then(data => data.filter(Boolean));
                    }


                    if (launch.payloads.length > 0) {
                        launch.payloads = await Promise.all(launch.payloads.map(payloadId => FetchDataById('payloads', payloadId))).then(data => data.filter(Boolean));
                    }

                    if (launch.launchpad) {
                        launch.launchpad = await FetchDataById('launchpads', launch.launchpad);
                    }

                    launch.cores = await Promise.all(launch.cores.map(async (core, index) => {
                        if (!core.core) return core;
                        const coreData = await FetchDataById('cores', core.core);
                        return {...core, core: coreData};
                    }));
                    setLaunchData(launch);
                } else {
                    const {data: allLaunchesData} = await axios.get('https://api.spacexdata.com/v4/launches');

                    let filteredLaunches = allLaunchesData;
                    if (searchTerm) {
                        filteredLaunches = allLaunchesData.filter(launch =>
                            launch.name.toLowerCase().includes(searchTerm.toLowerCase())
                        );
                    }
                    const totalPages = Math.ceil(filteredLaunches.length / 10);
                    setTotalPages(totalPages);
                    const pageNum = Math.max(parseInt(page, 10), 0);
                    if (pageNum >= totalPages) {
                        navigate('/notfound');
                        return;
                    } else {
                        const startIndex = pageNum * 10;
                        setLaunchListData(filteredLaunches.slice(startIndex, startIndex + 10));
                    }
                }
            } catch (e) {
                navigate('/notfound');
                console.log(e);
            } finally {
                setLoading(false);
            }
        };
        getLaunches();
    }, [id, page, searchTerm, navigate]);

    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    if (loading) {
        return <Typography variant="h4" align="center">Loading...</Typography>;
    }

    return (
        <Box className='main-box'>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginRight: 2 }}>
                {!id && <Search onSearchChange={updateSearchTerm} initialValue={searchTerm}/>}
            </Box>
            <GetBreadcrumbs/>
            {id && launchData ? (
                <Card className='card-individual'>
                    <CardMedia
                        component="img"
                        image={launchData.links?.patch?.small || noImg}
                        alt={`Launch patch for ${launchData.name}`}
                        sx={{height: 300, objectFit: 'contain'}}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {launchData.name}
                        </Typography>
                        <RenderObject obj={launchData} toggleExpandKey={toggleExpandKey} expandedKeys={expandedKeys}/>
                        {launchData.links?.webcast && (() => {
                            const videoIdMatch = launchData.links.webcast.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/);
                            const videoId = videoIdMatch ? videoIdMatch[1] : launchData.links.youtube_id;

                            const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : null;

                            return typeof embedUrl === 'string' ? (
                                    <iframe
                                        className='webcast-iframe'
                                        src={embedUrl}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title="Embedded webcast"
                                    />
                            ) : null;
                        })()}

                        {launchData.links?.article && (
                            <Button sx={{mt: 2}} variant="contained"
                                    onClick={() => openInNewTab(launchData.links.article)}>
                                Read Article
                            </Button>
                        )}
                        {launchData.links?.wikipedia && (
                            <Button sx={{mt: 2, ml: 2}} variant="contained"
                                    onClick={() => openInNewTab(launchData.links.wikipedia)}>
                                Read Wikipedia
                            </Button>
                        )}
                    </CardContent>
                </Card>
            ) : (
                <>
                    <Typography variant="h4" gutterBottom component="div">
                        {searchTerm ? "Search Results:" : "Launch List:"}
                    </Typography>
                    <Grid container spacing={2} justifyContent="center">
                        {launchListData.map((launch) => (
                            <Grid item key={launch.id} xs={6} sm={4} md={3} lg={2} xl={2.4} className='grid-item'>
                                <Card className='card-list'>
                                    <CardMedia
                                        component="img"
                                        image={launch.links?.patch?.small || noImg}
                                        alt={launch.name}
                                        sx={{height: 200, objectFit: 'contain', mx: 'auto'}}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {launch.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {launch.flight_number ? `Flight Number: ${launch.flight_number}` : 'No details available'}
                                        </Typography>
                                    </CardContent>
                                    <Button component={Link} to={`/launches/${launch.id}`} variant="contained">
                                        More Info
                                    </Button>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    {!id && totalPages > 1 && (
                        <Box className='page-box'>
                            <Pagination basePath="/launches" currentPage={page} totalPages={totalPages}/>
                        </Box>
                    )}
                </>
            )}
            <BackToTopButton/>
        </Box>
    );
}

export default Launches;
