import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPython,
    faJava,
    faHtml5,
    faCss3,
    faBootstrap,
    faReact,
    faGit,
    faGithub,
    faMdb,
} from "@fortawesome/free-brands-svg-icons";

const skillsList = ["Python", "Java", "C#", "ASP.Net core", "HTML", "CSS", "Botstrap", "React", "React", "Git", "Github"]
const icons = [
    faPython,
    faJava,
    null,
    null,
    faHtml5,
    faCss3,
    faBootstrap,
    faMdb,
    faReact,
    faGit,
    faGithub,
];
const SkillSet = () => {
    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: 3,
                paddingX: '5vw',
                '@media (min-width: 400px)': {
                    gridTemplateColumns: 'repeat(3, 1fr)',
                },
                '@media (min-width: 900px)': {
                    gridTemplateColumns: 'repeat(3, 1fr)',
                },
                '@media (min-width: 1400px)': {
                    gridTemplateColumns: 'repeat(5, 1fr)',
                },
            }}
        >
            {skillsList.map((skill, index) => (
                <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: 100}}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition:
                        {
                            type:'spring',
                            delay:index*0.1,
                            ease: "easeOut"
                        }
                    }}
                    viewport={{ once: false, amount: 0.25 }}
                    whileHover={{
                        scale: 1.1,
                        rotate: 1.5,
                        borderRadius: '20px',
                        boxShadow: '0px 0px 19px #ceabeb',
                        textShadow: '0px 0px 8px #ceabeb'
                    }}
                    whileTap={{ scale: 0.95 }}
                    style={{ borderRadius: '20px' }}
                >
                    <Card
                        sx={{
                            background: `linear-gradient(to left bottom, #330537, #4e015d, #670087, #7c00b7, #8c12eb);`,
                            borderRadius: "16px",
                            color: "white",
                            textAlign: "center",
                            height: { xs: "10vw", sm: "7vw", md: "5vw" },
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            transition: "transform 0.3s ease",
                        }}
                    >
                        <CardContent
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <FontAwesomeIcon icon={icons[index]} size="2x" />
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{
                                    marginLeft: 1,
                                    fontSize: { xs: "1rem", sm: "1.2rem", md: "1.2rem" },
                                }}>
                                {skill}
                            </Typography>
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </Box>
    );
};

export default SkillSet;
