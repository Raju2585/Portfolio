import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useProgress } from "@react-three/drei";
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader';
import CanvasLoader from "./Loader";

const Computers = ({ isMobile }) => {
  const gl = useThree((state) => state.gl);
  const computer = useGLTF("/desktop_pc/scene_ktx2.gltf",
    undefined, undefined, (loader) => {
      const ktx2Loader = new KTX2Loader();
      ktx2Loader.setTranscoderPath("https://cdn.jsdelivr.net/gh/pmndrs/drei-assets/basis/");

      ktx2Loader.detectSupport(gl);
      loader.setKTX2Loader(ktx2Loader);
    });

  return (
    <mesh >
      <ambientLight intensity={2.4} />
      {/* <hemisphereLight intensity={0.15} groundColor='black' /> */}
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.7}
        position={isMobile ? [0, -3, -2.2] : [-2, -3, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 7], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{ position: 'relative', zIndex: 1 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

useGLTF.preload("/desktop_pc/scene_ktx2.gltf");
export default ComputersCanvas;
