import { Box, CircularProgress } from "@mui/material";
import { Html, useProgress } from "@react-three/drei";
import { useMemo } from "react";

const CanvasLoader = () => {
  // const { progress } = useProgress(); // ✅ Correctly getting progress

  // // ✅ Memoizing the fixed progress value
  // const fixedProgress = useMemo(() => progress.toFixed(2), [progress]);
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className='canvas-loader'></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        <h3 color="#8925db">Loading....</h3>
      </p>
    </Html>
  );
};

export default CanvasLoader;
