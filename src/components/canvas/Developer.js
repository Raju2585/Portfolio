import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useGraph } from '@react-three/fiber';
import { useGLTF, OrbitControls, useFBX, useAnimations } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';
import CanvasLoader from './Loader';
import { useControls } from 'leva';

export function Developer({animationName,...props}) {
  const group=useRef(null);
  const { scene,animations } = useGLTF('/models/human/developer.glb'); // Ensure path starts with '/'
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);
  const {animations:salute}=useFBX("/models/human/salute.fbx");
  const {animations:victory}=useFBX("/models/human/victory.fbx");
  const {animations:layingIdle}=useFBX("/models/human/LayingIdle.fbx");
  const {animations:happyIdle}=useFBX("/models/human/HappyIdle.fbx");
  const {animations:idle}=useFBX("/models/human/idle.fbx");
  const {animations:clapping}=useFBX("/models/human/clapping.fbx");
  
  salute[0].name="salute";
  victory[0].name="victory";
  layingIdle[0].name="LayingIdle";
  happyIdle[0].name="HappyIdle";
  idle[0].name="idle";
  clapping[0].name="clapping";

  const {actions}=useAnimations([salute[0],victory[0],layingIdle[0],happyIdle[0],clapping[0]],group);

  useEffect(()=>{
    if(actions[animationName])
    {
      actions[animationName].reset().fadeIn(0.5).play();
      return ()=>actions[animationName].fadeOut(0.5);
    }
  },[animationName]);
  return (
    <group {...props} dispose={null} ref={group}>
      <primitive object={nodes.Hips} />
      <skinnedMesh geometry={nodes.Wolf3D_Hair.geometry} material={materials.Wolf3D_Hair} skeleton={nodes.Wolf3D_Hair.skeleton} />
      <skinnedMesh geometry={nodes.Wolf3D_Outfit_Top.geometry} material={materials.Wolf3D_Outfit_Top} skeleton={nodes.Wolf3D_Outfit_Top.skeleton} />
      <skinnedMesh geometry={nodes.Wolf3D_Outfit_Bottom.geometry} material={materials.Wolf3D_Outfit_Bottom} skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton} />
      <skinnedMesh geometry={nodes.Wolf3D_Outfit_Footwear.geometry} material={materials.Wolf3D_Outfit_Footwear} skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton} />
      <skinnedMesh geometry={nodes.Wolf3D_Body.geometry} material={materials.Wolf3D_Body} skeleton={nodes.Wolf3D_Body.skeleton} />
      <skinnedMesh name="EyeLeft" geometry={nodes.EyeLeft.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeLeft.skeleton} morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary} morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences} />
      <skinnedMesh name="EyeRight" geometry={nodes.EyeRight.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeRight.skeleton} morphTargetDictionary={nodes.EyeRight.morphTargetDictionary} morphTargetInfluences={nodes.EyeRight.morphTargetInfluences} />
      <skinnedMesh name="Wolf3D_Head" geometry={nodes.Wolf3D_Head.geometry} material={materials.Wolf3D_Skin} skeleton={nodes.Wolf3D_Head.skeleton} morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences} />
      <skinnedMesh name="Wolf3D_Teeth" geometry={nodes.Wolf3D_Teeth.geometry} material={materials.Wolf3D_Teeth} skeleton={nodes.Wolf3D_Teeth.skeleton} morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences} />
    </group>
  );
}


useGLTF.preload('/models/human/developer.glb');
useGLTF.preload('/models/human/layingIdle.fbx');
useGLTF.preload('/models/human/HappyIdle.fbx');
useGLTF.preload('/models/human/victory.fbx');
useGLTF.preload('/models/human/clapping.fbx');

