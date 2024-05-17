import { motion } from 'framer-motion';
import Link from 'next/link';
import Head from "next/head";
export default function Rockets() {
    return (
        <main>
            <Head>
                <title>Rockets</title>
            </Head>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center min-h-screen p-10"
                style={{ backgroundColor: '#f0f5f9' }}
            >
                <div className="max-w-2xl text-center text-gray-800">
                    <h1 className="text-4xl font-bold mb-8">Welcome to Rockets</h1>
                    <p className="text-lg mb-8">
                        Explore the thrilling world of rocket launches and their missions. Click below to dive deeper!
                    </p>
                    <Link href="/rockets/page/0">
                        <span
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 inline-block"
                        >
                            Explore Rockets
                        </span>
                    </Link>
                </div>
            </motion.div>
        </main>
    );
}
