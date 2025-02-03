import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import { Typewriter } from 'react-simple-typewriter';
import bg from '../images/bg_2.jpg';
import img from '../images/img_2.png';
import Grid from '@mui/material/Grid';
import { motion } from "framer-motion";
import Box from '@mui/material/Box';
import { MotionTypography } from '../motion components/MotionComponents';
const Item = ({ children }) => (
    <Box sx={{ padding: 2 }}>
        {children}
    </Box>
);
export default function Home() {
    return (
        <Card sx={{ height: '100vh', width: '100vw', position: 'relative', marginTop: '1vw' }}>
            <CardCover>
                <img
                    src={bg}
                    srcSet={bg}
                    loading="lazy"
                    alt=""
                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }}
                />
            </CardCover>
            <CardContent sx={{ justifyContent: 'center', alignItems: 'start' }}>
                <Grid container spacing={2} direction="row" alignItems="center">
                    <Grid item xs={12} sm={6} md={6}>
                        <Item>
                            <Box
                                sx={{
                                    fontFamily: 'sans-serif',
                                    fontWeight: 800,
                                    fontSize: { xs: '6vw', sm: '5vw', md: '4vw', lg: '3vw' },
                                    textAlign: 'center',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    paddingLeft: '7vw',
                                }}
                            >
                                <motion.span
                                    style={{ color: 'black' }}
                                    initial={{}}
                                    animate={{}}
                                    transition={{
                                    }}
                                >
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
                                textColor="neutral.300"
                                sx={{
                                    fontSize: { xs: '3vw', sm: '2.5vw', md: '2vw', lg: '1.3vw' }
                                }}
                                paddingLeft="7vw"
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
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Box
                        >
                            <motion.img
                                src={img}
                                srcSet={img}
                                loading="lazy"
                                alt=""
                                style={{ maxWidth: '100%', height: 'auto' ,opacity:0.8}} 
                                initial={{ width: '5vw' }} 
                                animate={{width:'70%'}}
                                transition={{
                                    type: 'spring',
                                    stiffness: 100,
                                    duration: 0.4
                                }}
                            />
                        </Box>

                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}