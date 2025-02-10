import React, { Suspense, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useProgress } from "@react-three/drei";
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader';
import CanvasLoader from "./Loader";

const Earth = () => {
  const gl=useThree((state)=>state.gl);
  const earth = useGLTF("/models/scene_ktx2.glb",
    undefined,undefined,(loader) => {
      const ktx2Loader = new KTX2Loader();
      ktx2Loader.setTranscoderPath("https://cdn.jsdelivr.net/gh/pmndrs/drei-assets/basis/");

      ktx2Loader.detectSupport(gl);
      loader.setKTX2Loader(ktx2Loader);
    }
  );
  console.log(earth);

  return (
    <primitive object={earth.scene} scale={3.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = ({onLoaded}) => {
  return (
    <Canvas
      style={{  backgroundColor: "transparent", width: "100%", height: "100%" }}
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true , alpha: true}}
      camera={{
        fov: 95,
        near: 0.1,
        far: 2000,
        position: [-4, 3, 2],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ambientLight/>
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

useGLTF.preload("/models/scene_ktx2.glb");
export default EarthCanvas;
