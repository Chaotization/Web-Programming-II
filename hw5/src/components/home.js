import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
    Box,
    Typography,
    Button,
    Card,
    CardContent,
    Grid,
} from "@mui/material";
import "../App.css";
import BackToTopButton from "./backToTop";

function HomePage() {
    const [histories, setHistories] = useState([]);
    const [companyInfo, setCompanyInfo] = useState({});
    const [loading, setLoading] = useState(true);
    const [isExpanded, setIsExpanded] = useState(false);


    useEffect(() => {
        async function getHistoryAndCompanyInfo() {
            try {
                const { data: allHistoryData } = await axios.get("https://api.spacexdata.com/v4/history");
                const sortedHistoryData = allHistoryData.sort((a, b) => new Date(b.event_date_utc) - new Date(a.event_date_utc));
                const recentHistoryData = sortedHistoryData.slice(0, 5);
                setHistories(recentHistoryData);

                const { data: companyData } = await axios.get("https://api.spacexdata.com/v4/company");
                setCompanyInfo(companyData);

            } catch (e) {
                console.error(e);
            }finally {
                setLoading(false);
            }
        }

        getHistoryAndCompanyInfo();
    }, []);

    const handleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    if (loading) {
        return <div>Loading...</div>;
    }


    return (
        <Box className="home-body">
            <Box className="overlay">
                <Typography variant="h4" gutterBottom>Welcome to SpaceX Explorer</Typography>
                <Button variant="contained" color="primary" onClick={handleExpand} className="expand-button">View Company Info and History</Button>
                {isExpanded && (
                    <Card className="expanded-card">
                        <CardContent>
                            <Typography variant="h6">Company Info</Typography>
                            <Typography>{companyInfo.summary}</Typography>
                            <Typography>Founded: {companyInfo.founded}</Typography>
                            <Typography>Founder: {companyInfo.founder}</Typography>
                            <Typography>CEO: {companyInfo.ceo}</Typography>
                            <Typography variant="h6" className="history-heading">History</Typography>
                            {histories.map((history) => (
                                <Card key={history.id} className="history-card">
                                    <CardContent>
                                        <Typography>Event Date: {history.event_date_utc}</Typography>
                                        <Typography>Title: {history.title}</Typography>
                                        <Typography>Details: {history.details}</Typography>
                                        {history.links && history.links.article && (
                                            <a href={history.links.article} target="_blank" rel="noopener noreferrer"
                                               className="read-more-link">Read More</a>
                                        )}
                                    </CardContent>
                                </Card>
                            ))}
                        </CardContent>
                    </Card>
                )}

                <Box mt="1rem" className="listings-box">
                    <Typography variant="h5" gutterBottom>Explore Listings</Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Link to="/launches/page/0" className="listing-link">Launches Listing</Link>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Link to="/payloads/page/0" className="listing-link">Payloads Listing</Link>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Link to="/cores/page/0" className="listing-link">Cores Listing</Link>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Link to="/rockets/page/0" className="listing-link">Rockets Listing</Link>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Link to="/ships/page/0" className="listing-link">Ships Listing</Link>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Link to="/launchpads/page/0" className="listing-link">Launch Pads Listing</Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <BackToTopButton />
        </Box>
    );
}

export default HomePage;