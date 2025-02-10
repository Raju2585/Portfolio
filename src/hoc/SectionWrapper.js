import React from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <Box
          sx={{
            maxWidth: "1280px", 
            margin: "0 auto", 
            position: "relative",
            zIndex: 0,
            padding: { xs: "10px 6px", sm: "16px 16px" }, 
          }}
        >
          <span id={idName} style={{ display: "block", visibility: "hidden" }}>
            &nbsp;
          </span>

          <Component />
        </Box>
      </motion.section>
    );
  };

export default StarWrapper;
