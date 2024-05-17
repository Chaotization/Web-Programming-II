import axios from "axios";
import Image from 'next/image';
import Head from 'next/head';
import noImg from '@/public/img/No_image.jpg'
import {Button, Card, CardContent, Typography} from "@mui/material";
import RenderObject from "@/components/renderObject.jsx";
import {useState} from "react";
import { motion } from "framer-motion";

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
                                    <div className="relative h-80 md:h-auto">
                                        <Image
                                            src={data.images?.large[0] || noImg}
                                            layout="fill"
                                            objectFit="cover"
                                            alt={data.name}
                                            className="rounded-lg"
                                        />
                                    </div>
                                    <div className="flex flex-col justify-between">
                                        <div>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {data.full_name}
                                            </Typography>
                                            <RenderObject obj={data} toggleExpandKey={toggleExpandKey}
                                                          expandedKeys={expandedKeys}/>
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
export async function getStaticProps({params}) {
    const data = await getLaunchPadById(params.id);
    return {
        props: {data},
        revalidate: 86400
    };
}

async function getLaunchPadById(id) {
    const {data} = await axios.get('https://api.spacexdata.com/v4/launchpads/' + id);

    return data;
}

async function getLaunchPads() {
    const {data} = await axios.get('https://api.spacexdata.com/v4/launchpads');
    return data;
}

export async function getStaticPaths() {
    const data = await getLaunchPads();
    const paths = data.map((launchpad) => {
        return {
            params: {id: launchpad.id.toString()}
        };
    });

    return {
        paths: paths,
        fallback: false
    };
}