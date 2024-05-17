import Head from 'next/head';
import {Card, CardContent, Typography} from "@mui/material";
import RenderObject from "@/components/renderObject.jsx";
import {useState} from "react";
import {motion} from "framer-motion";
import axios from "axios";

export default function launch({data}) {
    const [expandedKeys, setExpandedKeys] = useState({});
    const [loading, setLoading] = useState(false);
    const toggleExpandKey = (path) => {
        setExpandedKeys(prev => ({
            ...prev, [path]: !prev[path],
        }));
    };

    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    if (loading) {
        return <Typography variant="h4" align="center">Loading...</Typography>;
    }

    return (<main
            className="flex min-h-screen flex-col items-center justify-center p-10 bg-gray-100 relative overflow-hidden">
            <Head>
                <title>{data.name}</title>
            </Head>
            <motion.div
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
                className="w-full max-w-lg"
            >
                <Card className="rounded-lg overflow-hidden shadow-lg">
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {data.name}
                        </Typography>
                        <RenderObject obj={data} toggleExpandKey={toggleExpandKey} expandedKeys={expandedKeys}/>
                    </CardContent>
                </Card>
            </motion.div>
        </main>);
}


export async function getStaticProps({params}) {
    const data = await getPayloadById(params.id);
    return {
        props: {data}, revalidate: 86400
    };
}

async function getPayloadById(id) {
    const {data} = await axios.get('https://api.spacexdata.com/v4/payloads/' + id);
    return data;
}

async function getPayloads() {
    const {data} = await axios.get('https://api.spacexdata.com/v4/payloads');
    return data;
}

export async function getStaticPaths() {
    const data = await getPayloads();
    const paths = data.map((payload) => {
        return {params: {id: payload.id.toString()}};
    });

    return {
        paths: paths, fallback: false
    };
}