import React, { useMemo } from 'react';
import { Box, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import Grid from '@mui/material/Grid2';
import { MotionTypography } from './motion components/MotionComponents';
import bg from "./images/herobg.png";
import { CardCover } from '@mui/joy';
import ComputersCanvas from './canvas/Computer';
export default function Home({setComputerLoaded}) {
    const MemoizedComputer=useMemo(()=><ComputersCanvas />,[]);
    return (
        <Box sx={{ height: '100vh', width: '100%', position: 'relative', overflow: 'hidden' }}>
            <CardCover sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
                <img src={bg} alt="background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </CardCover>
            <CardContent sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Grid gap={2} container spacing={2} direction="row" alignItems="center">
                    <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                        <Box
                            sx={{
                                fontFamily: 'sans-serif',
                                fontWeight: 800,
                                fontSize: { xs: '6vw', sm: '5vw', md: '4vw', lg: '3vw' },
                                color: 'white',
                                textAlign: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingLeft: '7vw',
                                zIndex: 1
                            }}
                        >
                            <motion.span style={{ color: 'white' }}>
                                <Typewriter
                                    words={["HEY, I'M SANTHIRAJU"]}
                                    loop={0}
                                    cursor
                                    cursorStyle="_"
                                    typeSpeed={100}
                                    deleteSpeed={30}
                                    delaySpeed={1500}
                                />
                            </motion.span>
                        </Box>
                        <MotionTypography
                            sx={{
                                fontSize: { xs: '3vw', sm: '2.5vw', md: '2vw', lg: '1.3vw' },
                                color: '#aaa6c3',
                                paddingLeft: { xs: '2vw', sm: '4vw', md: '5vw', lg: '7vw' },
                            }}
                            marginTop={3}
                            initial={{ 
                                opacity: 0,
                                y:150,

                             }}
                            animate={{ 
                                opacity: 1 ,
                                y:0,
                            }}
                            transition={{
                                duration: 0.8,
                                delay: 1
                            }}
                        >
                            A Result-Oriented Web Developer building and managing Websites and Web
                            Applications that leads to the success of the overall product.
                        </MotionTypography>
                    </Grid>
                    <Grid sx={{
                        width: "100%",
                        height: "auto",
                        maxWidth: { xs: "90vw", sm: "80vw", md: "60vw", lg: "50vw" },
                        minHeight: { xs: "30vh", sm: "70vh", md: "90vh" },
                    }}
                        size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>

                        {MemoizedComputer}
                    </Grid>
                </Grid>
            </CardContent>
        </Box>
    );
}
