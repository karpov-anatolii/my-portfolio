import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import spaceStationScene from "../assets/3d/space-station1.glb";
import { useFrame } from "@react-three/fiber";

export function SpaceStation({ position, ...props }) {
  const ref = useRef();
  const [hovered, setHover] = useState(false);

  const { scene, nodes, materials } = useGLTF(spaceStationScene);

  useFrame(({ clock, camera }) => {
    // Update the Y position to simulate bird-like motion using a sine wave
    // ref.current.position.y = Math.sin(clock.elapsedTime) * 0.2;
    ref.current.rotation.y += 0.05;
    // ref.current.position.z += 1;
    // if (hovered) {
    //   ref.current.position.x += 10;
    //   console.log("ref.current.position.x=", ref.current.position.x);
    // }
    //  ref.current.position.x += 0.1;
    // Check if the bird reached a certain endpoint relative to the camera
  });
  return (
    <mesh {...props} position={position} ref={ref} dispose={null}>
      <primitive
        object={scene}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
        onPointer
      />
    </mesh>
  );
}

useGLTF.preload(spaceStationScene);
