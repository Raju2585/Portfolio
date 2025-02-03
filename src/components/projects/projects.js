import { Box } from "@mui/material";
import Spline from "@splinetool/react-spline";
export default function Project()
{
    return(<Box
        sx={{
          width: "100vw",
          height: "100vh",  
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <Spline
        scene="https://prod.spline.design/PdxxkLE9BIuTo5MJ/scene.splinecode" 
      />
      </Box>)
}
