import axios from 'axios';
import Link from 'next/link'
import {useEffect, useState} from 'react';
import {Box, Button, Card, CardContent, Grid, Typography} from "@mui/material";
import Pagination from "@/components/pagination.jsx";
import Head from "next/head.js";
import {motion} from "framer-motion";

export default function Launches({initialData, initialPage, totalPages}) {
    const [page, setPage] = useState(initialPage);
    const [data, setData] = useState(initialData);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchPageData(page + 1);
    }, [page]);

    const fetchPageData = async (apiPage) => {
        setLoading(true);
        const res = await axios.post('https://api.spacexdata.com/v4/payloads/query', {
            query: {},
            options: {
                page: apiPage,
                limit: 10
            }
        });
        setData(res.data);
        setLoading(false);
    };

    if (loading) {
        return <Typography variant="h4" align="center">Loading...</Typography>;
    }

    const calculateGridSize = () => {
        const cardWidth = 12 / 5;
        return {xs: 12, sm: 6, md: 4, lg: cardWidth, xl: cardWidth};
    };

    return (
        <>
            <Head>
                <title>Payloads</title>
            </Head>
            <main
                className="flex min-h-screen flex-col items-center justify-center p-10 bg-gray-100 relative overflow-hidden">
                <div className="container mx-auto px-4 py-8">
                    <h3 className="text-3xl font-bold mb-4">Payload List:</h3>
                    <Grid container spacing={4} justifyContent="center">
                        {data.docs.map((payload, index) => (
                            <Grid item key={payload.id} {...calculateGridSize()}>
                                <motion.div
                                    initial={{opacity: 0, y: 50}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.5, delay: index * 0.1}}
                                >
                                    <Card className="rounded-lg overflow-hidden shadow-lg">
                                        <CardContent className="p-6 flex flex-col justify-between">
                                            <div>
                                                <Typography variant="h5" component="div">{payload.name}</Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {payload.type}
                                                </Typography>
                                            </div>
                                        </CardContent>
                                        <Button component={Link} href={`/payloads/${payload.id}`} variant="contained" fullWidth>
                                            More Info
                                        </Button>
                                    </Card>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                    {totalPages > 1 && (
                        <Box className='mt-5 flex justify-center'>
                            <Pagination basePath="/payloads" currentPage={page} totalPages={totalPages}/>
                        </Box>
                    )}
                </div>
            </main>
        </>
    );
}

export async function getStaticProps({params}) {
    const page = parseInt(params.page, 10) || 0;
    const data = await getPayloadsByPage(page);
    const totalPages = data.totalPages - 1;

    if (page > totalPages || page < 0) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            initialData: data,
            initialPage: page,
            totalPages: totalPages
        },
        revalidate: 86400
    };
}

async function getPayloadsByPage(page) {
    const {data} = await axios.post('https://api.spacexdata.com/v4/payloads/query', {
        query: {},
        options: {
            page: page + 1,
            limit: 10
        }
    });
    return data;
}

export async function getStaticPaths() {
    const data = await getPayloads();
    const totalPages = Math.ceil(data.length / 10);
    const paths = Array.from({length: totalPages}, (_, index) => ({
        params: {page: index.toString()}
    }));

    return {
        paths,
        fallback: 'blocking'
    };
}

async function getPayloads() {
    const {data} = await axios.get('https://api.spacexdata.com/v4/payloads');
    return data;
}