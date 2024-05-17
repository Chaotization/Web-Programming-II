import axios from "axios";
import Image from 'next/image';
import Head from 'next/head';
import noImg from '@/public/img/No_image.jpg'
import {Button, Card, CardContent, Typography} from "@mui/material";
import RenderObject from "@/components/renderObject.jsx";
import {useState} from "react";
import {motion} from "framer-motion";

export default function launch({data}) {
    const [expandedKeys, setExpandedKeys] = useState({});
    const [loading, setLoading] = useState(false);
    const toggleExpandKey = (path) => {
        setExpandedKeys(prev => ({
            ...prev,
            [path]: !prev[path],
        }));
    };

    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    if (loading) {
        return <Typography variant="h4" align="center">Loading...</Typography>;
    }

    return (
        <>
            <Head>
                <title>{data.name}</title>
            </Head>
            <main className="flex flex-col items-center justify-center min-h-screen p-10 bg-gray-100">
                <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
                    <Card>
                        <CardContent>
                            <motion.div
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.5}}
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="relative h-80 md:h-auto flex items-center justify-center">
                                        <Image
                                            src={data.flickr_images ? data.flickr_images[0] : noImg}
                                            layout="fill"
                                            objectFit="contain"
                                            alt={data.name}
                                            className="rounded-t-lg"
                                        />
                                    </div>
                                    <div className="flex flex-col justify-between">
                                        <div>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {data.name}
                                            </Typography>
                                            <RenderObject obj={data} toggleExpandKey={toggleExpandKey}
                                                          expandedKeys={expandedKeys}/>
                                            {data.wikipedia && (
                                                <div className="flex justify-center">
                                                    <Button
                                                        variant="contained"
                                                        onClick={() => openInNewTab(data.wikipedia)}
                                                        className="mt-4"
                                                    >
                                                        Read Wikipedia
                                                    </Button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </>
    );
}


export async function getStaticProps({
                                         params
                                     }) {
    const data = await getRocketById(params.id);
    return {
        props: {data},
        revalidate: 86400
    };
}

async function getRocketById(id) {
    const {data} = await axios.get('https://api.spacexdata.com/v4/rockets/' + id);
    return data;
}

async function getRockets() {
    const {data} = await axios.get('https://api.spacexdata.com/v4/rockets');
    return data;
}

export async function getStaticPaths() {
    const data = await getRockets();
    const paths = data.map((rocket) => {
        return {
            params: {id: rocket.id.toString()}
        };
    });

    return {
        paths: paths,
        fallback: false
    };
}