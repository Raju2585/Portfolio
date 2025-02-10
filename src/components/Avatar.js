
import { useFrame, useGraph } from '@react-three/fiber'
import { SkeletonUtils } from 'three-stdlib'
import React, { Suspense, useEffect, useRef, useState } from 'react';
import { useGLTF, OrbitControls, useFBX, useAnimations } from '@react-three/drei';
import * as THREE from 'three';

export function Avatar({ animationName = "idle", ...props }) {
  const { scene } = useGLTF('/models/avatar/avatar.glb');
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone);
  const group = useRef(null);

  const { animations: salute } = useFBX("/models/avatar/salute.fbx");
  const { animations: victory } = useFBX("/models/avatar/victory.fbx");
  const { animations: typing } = useFBX("/models/avatar/Typing.fbx");
  const { animations: fallingIdle } = useFBX("/models/avatar/FallingIdle.fbx");
  const { animations: idle } = useFBX("/models/avatar/idle.fbx");
  const { animations: dance } = useFBX("/models/avatar2/Capoeira.fbx");
  dance[0].name = "dance";
  const { animations: waving } = useFBX("/models/avatar/waving.fbx");
  waving[0].name = "waving";

  const { animations: landing } = useFBX("/models/avatar2/HardLanding.fbx");
  landing[0].name = "landing";

  idle[0].name = "idle";
  fallingIdle[0].name = "FallingIdle";
  typing[0].name = "Typing";
  victory[0].name = "victory";
  salute[0].name = "salute";

  const { actions } = useAnimations([waving[0],landing[0], dance[0], salute[0], victory[0], typing[0], fallingIdle[0], idle[0]], group);


  useEffect(() => {
    group.current.traverse((child) => {
      if (child.isMesh) {
          child.frustumCulled = false;
      }
  });
  
    if (actions[animationName]) {
      if (animationName === "landing") {
        group.current.position.set(0, -5, 0);
        group.current.scale.set(3, 3, 3);
        group.current.rotation.set(-2, 0, 0);
      }
      else if(animationName==="waving")
      {
        group.current.position.set(0, -3, 0);
        group.current.scale.set(3.5, 3.5, 3.5);
        group.current.rotation.set(-2, 0, 0);
      }
      else if(animationName==="idle")
      {
        group.current.position.set(0, -3, 0);
        group.current.scale.set(3.5, 3.5, 3.5);
        group.current.rotation.set(0, 0, 0);
        actions["idle"].setLoop(THREE.LoopRepeat, Infinity);
      }
      actions[animationName].reset().play();
      return () => actions[animationName].fadeOut(0.5);
    }
  }, [animationName]);
  // useEffect(() => {
  //   if (!group.current || !actions) return;

  //   // Stop all animations initially
  //   Object.values(actions).forEach(action => action.stop());

  //   // Step 1: Play "landing" animation
  //   if (actions["landing"]) {
  //     group.current.position.set(0, -5, 0);
  //     group.current.scale.set(3, 3, 3);
  //     group.current.rotation.set(-2, 0, 0);
  //     actions["landing"].reset().play();
  //   }

  //   // Step 2: After landing animation, transition to salute
  //   const saluteTimeout = setTimeout(() => {
  //     if (actions["salute"]) {
  //       group.current.position.set(0, -3, 0);
  //       group.current.scale.set(3, 3, 3);
  //       group.current.rotation.set(0, 0, 0);
  //       actions["landing"].fadeOut(0.5);
  //       actions["salute"].reset().play();
  //     }
  //   }, 2000); // Adjust duration based on the landing animation length

  //   // Step 3: After salute animation, transition to looping idle
  //   const idleTimeout = setTimeout(() => {
  //     if (actions["idle"]) {
  //       group.current.position.set(0, -3, 0);
  //       group.current.scale.set(3, 3, 3);
  //       group.current.rotation.set(0, 0, 0);
  //       actions["salute"].fadeOut(0.5);
  //       actions["idle"].reset().play();
  //       actions["idle"].setLoop(THREE.LoopRepeat, Infinity);
  //     }
  //   }, 5000); // Adjust timing based on salute animation length

  //   return () => {
  //     clearTimeout(saluteTimeout);
  //     clearTimeout(idleTimeout);
  //   };
  // }, []);

  return (
    <group  {...props} dispose={null} ref={group}>
      <primitive object={nodes.Hips} />
      <skinnedMesh geometry={nodes.Wolf3D_Hair.geometry} material={materials.Wolf3D_Hair} skeleton={nodes.Wolf3D_Hair.skeleton} />
      <skinnedMesh geometry={nodes.Wolf3D_Glasses.geometry} material={materials.Wolf3D_Glasses} skeleton={nodes.Wolf3D_Glasses.skeleton} />
      <skinnedMesh geometry={nodes.Wolf3D_Body.geometry} material={materials.Wolf3D_Body} skeleton={nodes.Wolf3D_Body.skeleton} />
      <skinnedMesh geometry={nodes.Wolf3D_Outfit_Bottom.geometry} material={materials.Wolf3D_Outfit_Bottom} skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton} />
      <skinnedMesh geometry={nodes.Wolf3D_Outfit_Footwear.geometry} material={materials.Wolf3D_Outfit_Footwear} skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton} />
      <skinnedMesh geometry={nodes.Wolf3D_Outfit_Top.geometry} material={materials.Wolf3D_Outfit_Top} skeleton={nodes.Wolf3D_Outfit_Top.skeleton} />
      <skinnedMesh name="EyeLeft" geometry={nodes.EyeLeft.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeLeft.skeleton} morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary} morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences} />
      <skinnedMesh name="EyeRight" geometry={nodes.EyeRight.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeRight.skeleton} morphTargetDictionary={nodes.EyeRight.morphTargetDictionary} morphTargetInfluences={nodes.EyeRight.morphTargetInfluences} />
      <skinnedMesh name="Wolf3D_Head" geometry={nodes.Wolf3D_Head.geometry} material={materials.Wolf3D_Skin} skeleton={nodes.Wolf3D_Head.skeleton} morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences} />
      <skinnedMesh name="Wolf3D_Teeth" geometry={nodes.Wolf3D_Teeth.geometry} material={materials.Wolf3D_Teeth} skeleton={nodes.Wolf3D_Teeth.skeleton} morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences} />
    </group>
  )
}

useGLTF.preload('/models/avatar/avatar.glb');
useGLTF.preload('/models/avatar/Salute.fbx');
