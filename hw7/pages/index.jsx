import Link from 'next/link';
import {useState} from "react";
import {motion} from 'framer-motion';
import {Box, Button, Card, CardContent, Grid, Typography,} from "@mui/material";
import axios from "axios";
import BackToTopButton from "../components/backToTop.jsx";

export default function Home({companyInfo, histories}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
      <>
        <main
            className="flex min-h-screen flex-col items-center justify-center p-10 bg-gray-100 relative overflow-hidden">
          <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 1.5}}
              className="w-full max-w-4xl bg-white/90 backdrop-blur-sm rounded-lg shadow-md p-6 relative"
          >
            <Typography variant="h4" gutterBottom className="text-2xl font-bold text-center text-gray-800">
              Welcome to SpaceX Explorer
            </Typography>
            <div className="w-full flex justify-center">
              <Button
                  variant="contained"
                  color="primary"
                  onClick={handleExpand}
                  className="mt-4 mb-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
              >
                View Company Info and History
              </Button>
            </div>
            {isExpanded && (
                <Card className="mt-4 bg-gray-50 border border-gray-200 rounded-lg">
                  <CardContent>
                    <Typography variant="h6" className="font-semibold text-lg">Company Info</Typography>
                    <Typography className="text-gray-700">{companyInfo.summary}</Typography>
                    <Typography>Founded: {companyInfo.founded}</Typography>
                    <Typography>Founder: {companyInfo.founder}</Typography>
                    <Typography>CEO: {companyInfo.ceo}</Typography>
                    <Typography variant="h6" className="mt-4 font-semibold text-lg">History</Typography>
                    {histories.map((history) => (
                        <motion.div
                            key={history.id}
                            whileHover={{scale: 1.03}}
                            className="my-2 p-4 bg-white rounded-lg shadow"
                        >
                          <CardContent>
                            <Typography>Event Date: {history.event_date_utc}</Typography>
                            <Typography>Title: {history.title}</Typography>
                            <Typography>Details: {history.details}</Typography>
                            {history.links && history.links.article && (
                                <a
                                    href={history.links.article}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:text-blue-800 transition duration-300"
                                >
                                  Read More
                                </a>
                            )}
                          </CardContent>
                        </motion.div>
                    ))}
                  </CardContent>
                </Card>
            )}

            <Box mt="8" className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Typography variant="h5" gutterBottom className="col-span-2 text-xl font-semibold text-gray-800">
                Explore Listings
              </Typography>
              {['launches', 'payloads', 'cores', 'rockets', 'ships', 'launchpads'].map(category => (
                  <Grid item xs={12} key={category}>
                    <Link href={`/${category}/page/0`} passHref>
                      <Button
                          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                      >
                        {`${category.charAt(0).toUpperCase() + category.slice(1)} Listing`}
                      </Button>
                    </Link>
                  </Grid>
              ))}
            </Box>
          </motion.div>
          <BackToTopButton/>
        </main>
      </>
  );
}

export async function getStaticProps() {
  try {
    const {data: historyData} = await axios.get("https://api.spacexdata.com/v4/history");
    const sortedHistoryData = historyData.sort((a, b) => new Date(b.event_date_utc) - new Date(a.event_date_utc));
    const recentHistories = sortedHistoryData.slice(0, 5);

    const {data: companyInfo} = await axios.get("https://api.spacexdata.com/v4/company");

    return {
      props: {
        companyInfo,
        histories: recentHistories
      },
      revalidate: 86400
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        companyInfo: {},
        histories: []
      }
    };
  }
}