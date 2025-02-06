import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Box, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import Grid from '@mui/material/Grid2';
import { MotionTypography } from '../motion components/MotionComponents';
import img from '../images/header-img.svg'
import bg from "../images/herobg.png";
import { CardCover } from '@mui/joy';
import { Computer } from '@mui/icons-material';
import ComputersCanvas from '../canvas/Computer';
import DeveloperCanvas from '../canvas/Developer';
import { Canvas, useGraph } from '@react-three/fiber';
import { useGLTF, OrbitControls, useFBX, useAnimations } from '@react-three/drei';
import CanvasLoader from '../canvas/Loader';
import { Developer2, Developer_2 } from '../canvas/Developer_2';
import { useControls } from 'leva';
import { Developer } from '../canvas/Developer';
export default function Home() {
    const { scale, position, lightIntensity, ambientLightIntensity, spotLightIntensity, directionalLightIntensity } = useControls("Developer Settings", {
        scale: { value: [3, 3, 3.5], min: 1, max: 50, step: 0.5 },
        position: { value: [0, -3, 0], min: -50, max: 50, step: 1 },
        lightIntensity: { value: 1, min: 0, max: 10, step: 0.1 },
        ambientLightIntensity: { value: 1.5, min: 0, max: 5, step: 0.1 },
        spotLightIntensity: { value: 2, min: 0, max: 10, step: 0.1 },
        directionalLightIntensity: { value: 4.3, min: 0, max: 10, step: 0.1 },
      });
    return (
        <Box sx={{ height: '100vh', width: '100%', position: 'relative', overflow: 'hidden' }}>

            <CardCover sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
                <img src={bg} alt="background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </CardCover>


            <CardContent sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Grid gap={2} container spacing={2} direction="row" alignItems="center">
                    <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
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
                            textColor="white"
                            sx={{
                                fontSize: { xs: '3vw', sm: '2.5vw', md: '2vw', lg: '1.3vw' },
                                color: 'white',
                                paddingX: { xs: '2vw', sm: '4vw', md: '5vw', lg: '7vw' },
                            }}
                            marginTop={3}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 3,
                                delay: 1
                            }}
                        >
                            A Result-Oriented Web Developer building and managing Websites and Web
                            Applications that leads to the success of the overall product.
                        </MotionTypography>
                    </Grid>
                    <Grid sx={{
                        width: "60vw",
                        height: "90vh"
                    }}
                        size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>

                        {/* <ComputersCanvas /> */}
                        <Canvas camera={{ position: [0, 0, 5] }}>
                            <OrbitControls maxZoom={false} maxPolarAngle={Math.PI / 2} />
                            <ambientLight intensity={ambientLightIntensity} />
                            <directionalLight intensity={directionalLightIntensity} position={[5, 10, 5]} />
                            <spotLight intensity={spotLightIntensity} position={[0, 10, 0]} angle={0.3} penumbra={1} />

                            <Suspense fallback={<CanvasLoader />}>
                                <Developer animationName="salute" scale={scale} position={position} />
                                {/* <Developer2 animationName="salute" scale={scale} position={position}/> */}
                            </Suspense>
                        </Canvas>
                    </Grid>
                </Grid>
            </CardContent>
        </Box>
    );
}
