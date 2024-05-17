import Head from "next/head.js";
import {motion} from "framer-motion";
import Link from "next/link.js";

export default function Payloads() {

    return (
        <main>
            <Head>
                <title>Payloads</title>
            </Head>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center min-h-screen p-10"
                style={{ backgroundColor: '#f0f5f9' }}
            >
                <div className="max-w-2xl text-center text-gray-800">
                    <h1 className="text-4xl font-bold mb-8">Welcome to Payloads</h1>
                    <p className="text-lg mb-8">
                        Discover the fascinating payloads carried by rockets and their missions. Click below to explore
                        further!
                    </p>
                    <Link href="/payloads/page/0">
                        <span
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 inline-block"
                        >
                            Explore Payloads
                        </span>
                    </Link>
                </div>
            </motion.div>
        </main>
    );
}