import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

import boyScene from "../assets/3d/spaceship.glb";

// 3D Model from: https://sketchfab.com/3d-models/phoenix-boy-844ba0cf144a413ea92c779f18912042
export function Boy({ ...props }) {
  // Load the 3D model and animations from the provided GLTF file
  const { scene, animations } = useGLTF(boyScene);
  const boyRef = useRef();
  const forward = useRef(true);
  // Get access to the animations for the boy

  // Play the "Take 001" animation when the component mounts
  // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
  // useEffect(() => {
  //   actions["Take 001"].play();
  // }, []);

  useFrame(({ clock, camera }) => {
    boyRef.current.rotation.y = clock.elapsedTime * 1;

    boyRef.current.position.y = Math.sin(clock.elapsedTime) * 5;

    if (boyRef.current.position.x > camera.position.x + 40) {
      forward.current = false;
    } else if (boyRef.current.position.x < camera.position.x - 20) {
      forward.current = true;
    }

    if (forward.current) {
      // Moving forward
      boyRef.current.position.x += 0.1;
      boyRef.current.position.z -= 0.1;
    } else {
      // Moving backward
      boyRef.current.position.x -= 0.1;
      boyRef.current.position.z += 0.1;
    }
  });
  //const { nodes, materials } = useGLTF(boyScene);
  return (
    <mesh ref={boyRef} {...props}>
      // use the primitive element when you want to directly embed a complex 3D
      model or scene
      <primitive object={scene} />
    </mesh>
  );
}
