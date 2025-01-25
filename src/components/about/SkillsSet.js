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

const skillsList = ["Python", "Java", "C#", "ASP.Net core", "HTML", "CSS", "Botstrap", "Material UI", "React", "Git", "Github"]
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
            }}
        >
            {skillsList.map((skill, index) => (
                <motion.div
                    key={skill}
                    whileHover={{
                        scale: 1.1,
                        rotate: 1.5,
                        boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
                    }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Card
                        sx={{
                            background: `linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)`,
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
                            <FontAwesomeIcon icon={icons[index]} size="2x"  />
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{
                                    marginLeft:1,
                                    fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" }, // Responsive text size
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
