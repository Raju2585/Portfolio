import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import '@fontsource/roboto';
import SkillSet from './SkillsSet';
import { motion } from "framer-motion";
import { MotionTypography } from './motion components/MotionComponents';
import { faL } from '@fortawesome/free-solid-svg-icons';
export default function AboutMe() {
    const textVariants = {
        hidden: { opacity: 0, y: 200, },
        visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } }
    };

    return (
        <Container maxWidth="100vw" sx={{ marginX: '5vw', marginY: '7vw', position: 'relative', overflow: 'hidden' }}>
            <Grid container direction='row'>
                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                    <Box display='flex' flexDirection='column' alignItems='center'>
                        <MotionTypography
                            variants={textVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.1 }}
                            style={{
                                fontSize: "4vw",
                                fontWeight: "bold",
                                color: "white",
                                textAlign: "center",
                            }}
                        >
                            About Me
                        </MotionTypography>


                        <MotionTypography
                            variant="body1"
                            variants={textVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.1 }}
                            sx={{
                                fontSize: { xs: '3.5vw', sm: '2.5vw', md: '1.3vw' },
                                fontFamily: 'Roboto, Arial, sans-serif',
                                color: '#aaa6c3',
                                paddingLeft: { xs: '5vw', sm: '10vw', md: '15vw' },
                                paddingRight: { xs: '5vw', sm: '10vw', md: '15vw' },
                                textAlign: 'center',
                            }}
                            gutterBottom
                        >
                            Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.
                        </MotionTypography>

                    </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                    <Box>
                        <MotionTypography
                            variant='h4'
                            variants={textVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.1 }}
                            sx={{
                                fontFamily: 'Roboto, Arial, sans-serif',
                                fontWeight: 'bold',
                                color: 'white',
                                fontSize: { xs: '5vw', sm: '4vw', md: '3vw', lg: '2vw' },
                                paddingTop: 5,
                                paddingBottom: 3
                            }}
                        >
                            Get to know me!
                        </MotionTypography>
                        <MotionTypography
                            variant='body1'
                            variants={textVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.1 }}
                            sx={{
                                fontSize: { xs: '3vw', sm: '2vw', md: '1.2vw' },
                                fontFamily: 'Roboto, Arial, sans-serif',
                                color: '#aaa6c3',
                                paddingY: 1
                            }}
                        >
                            I'm a Full-Stack Web Developer passionate about building and managing web applications. I enjoy creating user-friendly solutions, staying updated with the latest trends, and sharing my knowledge with the developer community. Check out my projects in the Projects section, and connect with me on LinkedIn or Instagram. I'm open to job opportunities where I can apply my skills and grow—let's connect!
                        </MotionTypography>
                        {/* <Typography
                            variant='body1'
                            sx={{
                                fontSize: { xs: '3vw', sm: '2vw', md: '1.2vw' },
                                fontFamily: 'Roboto, Arial, sans-serif',
                                color: 'gray',
                                paddingY: 1
                            }}>
                            I’m constantly learning and staying updated with the latest trends in Web Development and Programming. I also enjoy sharing the knowledge I’ve gained through my projects and experiences to help others in the Developer Community. Feel free to connect with me on LinkedIn or Instagram, where I post useful content about development and technology.
                        </Typography>
                        <Typography
                            variant='body1'
                            sx={{
                                fontSize: { xs: '3vw', sm: '2vw', md: '1.2vw' },
                                fontFamily: 'Roboto, Arial, sans-serif',
                                color: 'gray',
                                paddingY: 1
                            }}>
                            I’m excited to explore job opportunities where I can apply my skills, learn from industry professionals, and grow as a Full-Stack Developer. If you have an opportunity that matches my potential, I’d love to hear from you!
                        </Typography> */}
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                    <Box>
                        <MotionTypography
                            variant='h4'
                            variants={textVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.1 }}
                            sx={{
                                fontFamily: 'Roboto, Arial, sans-serif',
                                fontWeight: 'bold',
                                fontSize: { xs: '5vw', sm: '4vw', md: '3vw', lg: '2vw' },
                                // color:'#8925db',
                                color: 'white',
                                paddingTop: 5,
                                paddingBottom: 5,
                                paddingLeft: '5vw'
                            }}
                        >
                            My Skills
                        </MotionTypography>
                        <SkillSet />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}
