import { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import noImg from "@/public/img/No_image.jpg";
import axios from "axios";
import RenderObject from "@/components/renderObject.jsx";
import {motion} from "framer-motion";
import {Card, CardContent, Button} from "@mui/material";

export default function Launch({ data }) {
    const [expandedKeys, setExpandedKeys] = useState({});

    const toggleExpandKey = (path) => {
        setExpandedKeys((prev) => ({
            ...prev,
            [path]: !prev[path],
        }));
    };

    const openInNewTab = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };


    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-10 bg-gray-100 relative overflow-hidden">
            <Head>
                <title>{data.name}</title>
            </Head>
            <motion.div
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
                className="flex items-center justify-center min-h-screen p-10 bg-gray-100"
            >
                <div className="max-w-4xl w-full">
                    <Card className="rounded-lg overflow-hidden shadow-lg">
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="relative h-80 md:h-auto">
                                    <Image
                                        src={
                                            data.links?.patch?.small
                                                ? data.links.patch.small
                                                : noImg
                                        }
                                        layout="responsive"
                                        objectFit="cover"
                                        width={500}
                                        height={500}
                                        alt={data.name}
                                    />
                                    {data.links?.webcast && (() => {
                                        const videoIdMatch = data.links.webcast.match(
                                            /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/
                                        );
                                        const videoId = videoIdMatch
                                            ? videoIdMatch[1]
                                            : data.links.youtube_id;

                                        const embedUrl = videoId
                                            ? `https://www.youtube.com/embed/${videoId}`
                                            : null;

                                        return typeof embedUrl === "string" ? (
                                            <div className="absolute top-50 left-0 w-full h-2/5">
                                                <iframe
                                                    className="w-full h-full"
                                                    src={embedUrl}
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                    title="Embedded webcast"
                                                />
                                            </div>
                                        ) : null;
                                    })()}
                                </div>
                                <div className="p-6 flex flex-col justify-between">
                                    <div>
                                        <h1 className="text-3xl font-bold text-gray-800 mb-4">
                                            {data.name}
                                        </h1>
                                        <RenderObject
                                            obj={data}
                                            toggleExpandKey={toggleExpandKey}
                                            expandedKeys={expandedKeys}
                                        />
                                    </div>
                                    <div className="flex space-x-4 mt-4">
                                        {data.links?.article && (
                                            <Button
                                                variant="contained"
                                                onClick={() =>
                                                    openInNewTab(data.links.article)
                                                }
                                            >
                                                Read Article
                                            </Button>
                                        )}
                                        {data.links?.wikipedia && (
                                            <Button
                                                variant="contained"
                                                onClick={() =>
                                                    openInNewTab(data.links.wikipedia)
                                                }
                                            >
                                                Read Wikipedia
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </motion.div>
        </main>
    );

}

    export async function getStaticProps({ params }) {
    const data = await getLaunchById(params.id);
    return {
        props: { data },
        revalidate: 86400,
    };
}

async function getLaunchById(id) {
    const { data } = await axios.get(
        "https://api.spacexdata.com/v4/launches/" + id
    );
    return data;
}

async function getLaunches() {
    const { data } = await axios.get("https://api.spacexdata.com/v4/launches");
    return data;
}

export async function getStaticPaths() {
    const data = await getLaunches();
    const paths = data.map((launch) => {
        return {
            params: { id: launch.id.toString() },
        };
    });

    return {
        paths: paths,
        fallback: false,
    };
}
