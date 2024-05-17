import axios from 'axios';
import Link from 'next/link';
import {useEffect, useState} from 'react';
import {Button, Card, CardContent, CircularProgress, Grid, Typography} from '@mui/material';
import Pagination from '@/components/pagination';
import {motion} from 'framer-motion';
import Head from "next/head";

export default function Launches({initialData, initialPage, totalPages}) {
    const [page, setPage] = useState(initialPage);
    const [data, setData] = useState(initialData);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchPageData(page + 1);
    }, [page]);

    const fetchPageData = async (apiPage) => {
        setLoading(true);
        try {
            const res = await axios.post('https://api.spacexdata.com/v4/cores/query', {
                query: {},
                options: {
                    page: apiPage,
                    limit: 10
                }
            });
            setData(res.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <CircularProgress/>
            </div>
        );
    }

    const calculateGridSize = () => {
        const cardWidth = 12 / 5;
        return {xs: 12, sm: 6, md: 4, lg: cardWidth, xl: cardWidth};
    };

    return (
        <>
            <Head>
                <title>Cores</title>
            </Head>
            <main
                className="flex min-h-screen flex-col items-center justify-center p-10 bg-gray-100 relative overflow-hidden">
                <div className="container mx-auto px-4 py-8">
                    <h3 className="text-3xl font-bold mb-4">Core List:</h3>
                    <Grid container spacing={4} justifyContent="center">
                        {data.docs.map((core, index) => (
                            <Grid item key={core.id} {...calculateGridSize()}>
                                <motion.div
                                    initial={{opacity: 0, y: 50}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.5, delay: index * 0.1}}
                                >
                                    <Card className="rounded-lg overflow-hidden shadow-lg">
                                        <CardContent className="p-4 flex flex-col justify-between">
                                            <div>
                                                <Typography variant="h5" component="div"
                                                            className="font-bold text-xl mb-2">{core.serial}</Typography>
                                                <Typography variant="body2"
                                                            color="text.secondary">{core.status}</Typography>
                                            </div>
                                            <div className="mt-4">
                                                <Button href={`/cores/${core.id}`} variant="contained" fullWidth>
                                                    More Info
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                    {totalPages > 1 && (
                        <div className="flex justify-center mt-8">
                            <Pagination basePath="/cores" currentPage={page} totalPages={totalPages}/>
                        </div>
                    )}
                </div>
            </main>
        </>
    );
}

export async function getStaticProps({params}) {
    const page = parseInt(params.page, 10) || 0;
    const data = await getCoresByPage(page);
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

async function getCoresByPage(page) {
    const {data} = await axios.post('https://api.spacexdata.com/v4/cores/query', {
        query: {},
        options: {
            page: page,
            limit: 10
        }
    });
    return data;
}

export async function getStaticPaths() {
    const data = await getCores();
    const totalPages = Math.ceil(data.length / 10);
    const paths = Array.from({length: totalPages}, (_, index) => ({
        params: {page: index.toString()}
    }));

    return {
        paths,
        fallback: 'blocking'
    };
}

async function getCores() {
    const {data} = await axios.get('https://api.spacexdata.com/v4/cores');
    return data;
}
