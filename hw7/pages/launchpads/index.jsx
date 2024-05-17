import { motion } from 'framer-motion';
import Link from 'next/link';
import Head from "next/head";

export default function LaunchPads() {
    return (
        <main>
            <Head>
                <title>Launchpads</title>
            </Head>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center min-h-screen p-10"
                style={{ backgroundColor: '#f0f5f9' }}
            >
                <div className="max-w-2xl text-center text-gray-800">
                    <h1 className="text-4xl font-bold mb-8">Welcome to Launchpads</h1>
                    <p className="text-lg mb-8">
                        Discover the thrilling world of rocket launchpads and their missions. Click below to explore more!
                    </p>
                    <Link href="/launchpads/page/0">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 inline-block"
                        >
                            Explore Launchpads
                        </motion.button>
                    </Link>
                </div>
            </motion.div>
        </main>
    );
}
