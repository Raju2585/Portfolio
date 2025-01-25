import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, Container } from '@mui/material';
import '@fontsource/roboto';
import SkillSet from './SkillsSet';

let skillsList = ["Python", "Java", "C#", ".Net core", "HTML", "CSS", "Botstrap", "Material UI", "React", "Git", "Github"]
export default function AboutMe() {
    return (
        <Container sx={{ marginY: '4vw' }}>
            <Grid container direction='row'>
                <Grid size={{ xs: 12, sm: 12, md: 12 }}>
                    <Box display='flex' flexDirection='column' alignItems='center'>
                        <Typography
                            variant="h3"
                            fontSize='4vw'
                            gutterBottom
                            sx={{
                                fontFamily: 'Roboto, Arial, sans-serif',
                                fontWeight: 'bold',
                                fontSize: { xs: '6vw', sm: '5vw', md: '4vw' }
                            }}
                        >
                            About Me
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: { xs: '3.5vw', sm: '2.5vw', md: '1.5vw' },
                                paddingLeft: { xs: '5vw', sm: '10vw', md: '15vw' },
                                paddingRight: { xs: '5vw', sm: '10vw', md: '15vw' },
                                textAlign: 'center',
                            }}
                            gutterBottom
                        >
                            Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.
                        </Typography>

                    </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                    <Box>
                        <Typography
                            variant='h4'
                            sx={{
                                fontFamily: 'Roboto, Arial, sans-serif',
                                fontWeight: 'bold',
                                fontSize: { xs: '5vw', sm: '4vw', md: '3vw' },
                                paddingTop: 5,
                                paddingBottom: 3
                            }}
                        >
                            Get to know me!
                        </Typography>
                        <Typography
                            variant='body1'
                            sx={{
                                fontSize: { xs: '3vw', sm: '2vw', md: '1.2vw' },
                                paddingY: 1
                            }}
                        >
                            I'm a Full-Stack Web Developer with a passion for building and managing both the Front-end and Back-end of Web Applications. While I’m a fresher, I have worked on several projects that showcase my skills in creating functional and user-friendly applications. You can explore some of my work in the Projects section.
                        </Typography>
                        <Typography
                            variant='body1'
                            sx={{
                                fontSize: { xs: '3vw', sm: '2vw', md: '1.2vw' },
                                paddingY: 1
                            }}>
                            I’m constantly learning and staying updated with the latest trends in Web Development and Programming. I also enjoy sharing the knowledge I’ve gained through my projects and experiences to help others in the Developer Community. Feel free to connect with me on LinkedIn or Instagram, where I post useful content about development and technology.
                        </Typography>
                        <Typography
                            variant='body1'
                            sx={{
                                fontSize: { xs: '3vw', sm: '2vw', md: '1.2vw' },
                                paddingY: 1
                            }}>
                            I’m excited to explore job opportunities where I can apply my skills, learn from industry professionals, and grow as a Full-Stack Developer. If you have an opportunity that matches my potential, I’d love to hear from you!
                        </Typography>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                    <Box>
                        <Typography
                            variant='h4'
                            sx={{
                                fontFamily: 'Roboto, Arial, sans-serif',
                                fontWeight: 'bold',
                                fontSize: { xs: '5vw', sm: '4vw', md: '3vw' },
                                paddingTop: 5,
                                paddingBottom:5,
                                paddingLeft:'5vw'
                            }}
                        >
                            My Skills
                        </Typography>
                        <SkillSet />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}
