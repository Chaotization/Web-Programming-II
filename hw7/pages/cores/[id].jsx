import axios from "axios";
import {useState} from "react";
import {motion} from "framer-motion";
import Head from 'next/head';
import {Card, CardContent, Typography} from "@mui/material";
import RenderObject from "@/components/renderObject.jsx";

export default function Launch({data}) {
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
            <main
                className="flex min-h-screen flex-col items-center justify-center p-10 bg-gray-100 relative overflow-hidden">

                <motion.div
                    initial={{opacity: 0, y: 50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                    className="w-full max-w-lg"
                >
                    <Card className="rounded-lg overflow-hidden shadow-lg">
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {data.serial}
                            </Typography>
                            <RenderObject obj={data} toggleExpandKey={toggleExpandKey} expandedKeys={expandedKeys}/>
                        </CardContent>
                    </Card>
                </motion.div>
            </main>
        </>
    );
}

export async function getStaticProps({params}) {
    const data = await getCoresById(params.id);
    return {
        props: {data},
        revalidate: 86400
    };
}

async function getCoresById(id) {
    const {data} = await axios.get('https://api.spacexdata.com/v4/cores/' + id);
    return data;
}

async function getCores() {
    const {data} = await axios.get('https://api.spacexdata.com/v4/cores');
    return data;
}

export async function getStaticPaths() {
    const data = await getCores();
    const paths = data.map((core) => {
        return {
            params: {id: core.id.toString()}
        };
    });

    return {
        paths: paths,
        fallback: false
    };
}
