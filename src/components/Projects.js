import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Grid,
  IconButton,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants/index";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Card
        sx={{
          backgroundColor: "#151030",
          color: "white",
          p: 2,
          borderRadius: "16px",
          maxWidth: 360,
          boxShadow: "0px 35px 120px -15px #211e35",
        }}
      >
        <Box sx={{ position: "relative" }}>
          <CardMedia
            component="img"
            height="230"
            image={image}
            alt="project_image"
            sx={{ borderRadius: "16px" }}
          />
          <IconButton
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              background: "rgba(0, 0, 0, 0.5)",
              color: "white",
              '&:hover': { background: "rgba(0, 0, 0, 0.7)" },
            }}
            onClick={() => window.open(source_code_link, "_blank")}
          >
            <GitHubIcon />
          </IconButton>
        </Box>
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>{name}</Typography>
          <Typography variant="body2" color="#aaa6c3" sx={{ mt: 1 }}>
            {description}
          </Typography>
          <Box sx={{ mt: 2, display: "flex", flexWrap: "wrap", gap: 1 }}>
            {tags.map((tag) => (
              <Typography key={`${name}-${tag.name}`} variant="body2" sx={{ color: tag.color }}>
                #{tag.name}
              </Typography>
            ))}
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Project = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        paddingX: "5vw", 
        paddingY: "4vw",
        boxSizing: "border-box",
      }}
    >
      <motion.div variants={textVariant()}>
        <Typography variant="subtitle1" sx={{ color: "#aaa6c3" }}>
          My work
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "white" }}>
          Projects.
        </Typography>
      </motion.div>
      <Box sx={{ mt: 3, maxWidth: "750px" }}>
        <motion.p variants={fadeIn("", "", 0.1, 1)}>
          <Typography variant="body1" color="#aaa6c3">
            Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
          </Typography>
        </motion.p>
      </Box>
      {/* Ensure Grid stretches across the entire screen width */}
      <Grid container spacing={4} sx={{ mt: 5, width: "100%" }}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={`project-${index}`}>
            <ProjectCard index={index} {...project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};


export default SectionWrapper(Project, "");
