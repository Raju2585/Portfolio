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
export default function Home(){
    return (
        <Card sx={{ height: '100vh', width: '100vw', position: 'relative', marginTop: '5vw' }}>
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
                            <div
                                style={{
                                    fontFamily: 'sans-serif',
                                    fontWeight: 800,
                                    fontSize: '3vw',
                                    textAlign: 'center',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    paddingLeft: '7vw',
                                }}
                            >
                                <span style={{ color: 'black' }}>
                                    <Typewriter
                                        words={["HEY, I'M SANTHIRAJU"]}
                                        loop={0}
                                        cursor
                                        cursorStyle="_"
                                        typeSpeed={100}
                                        deleteSpeed={30}
                                        delaySpeed={1500}
                                    />
                                </span>
                            </div>
                            <MotionTypography
                                startDecorator={<LocationOnRoundedIcon />}
                                textColor="neutral.300"
                                fontSize="1.5vw"
                                paddingLeft="7vw"
                                marginTop={3}
                                initial={{ x: '-100vw' }}
                                animate={{ x: 0 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 80,
                                    duration: 0.4
                                }}
                            >
                                A Result-Oriented Web Developer building and managing Websites and Web
                                Applications that leads to the success of the overall product
                            </MotionTypography>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Item>
                            <motion.img
                                src={img}
                                srcSet={img}
                                loading="lazy"
                                alt=""
                                style={{ width: '35vw', height: 'auto', opacity: 0.8 }}
                                initial={{ x: '100vw' }}
                                animate={{ x: 0 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 80,
                                    duration: 0.4
                                }}
                            />
                        </Item>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}