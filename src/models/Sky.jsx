import { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

import skyScene from "../assets/3d/sky2.glb";
import { useEffect } from "react";
import { DashboardContext } from "../components/DashboardContext";
import { useContext } from "react";

// 3D Model from: https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042
export function Sky({ isMobileDevice }) {
  
  const { gl, viewport, camera } = useThree();

  const sky = useGLTF(skyScene); // sky={nodes, materials, animations, scene, animationsMap, animationsRoot}
  const skyRef = useRef();

  const lastX = useRef(0);
  const lastY = useRef(0);
  const degreeBeta = useRef(0);
  const degreeGamma = useRef(0);
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const joystickCenterX = Math.round((window.innerWidth / 10) * 8.5);
  const joystickCenterY = Math.round((window.innerHeight / 10) * 7);
  const joystickRadius = 50;
  const joystickMinX = joystickCenterX - joystickRadius;
  const joystickMaxX = joystickCenterX + joystickRadius;
  const joystickMinY = joystickCenterY - joystickRadius;
  const joystickMaxY = joystickCenterY + joystickRadius;
  const koefRotation = 0.01;
  const speedRotationX = useRef(0);
  const speedRotationY = useRef(0);

  const acceleration = 1;
  const initialSpeed = 0.5;
  const {
    fly,
    setFly,
    orbitMode,
    setOrbitMode,
    speed,
    setSpeed,
    location,
    setLocation,
  } = useContext(DashboardContext);
  let camSpeed = speed;
  const [isMouseClick, setIsMouseClick] = useState(false);
  const maxRadiusCameraPosition = 4500;
  const targetCameraPosition = [0, 0, 0];

  function handleMouseDown() {
    setIsMouseClick(true);
  }

  function handleClick(event) {
    if (isMouseClick) {
      event.stopPropagation();
      setFly(!fly);
    }
    setIsMouseClick(false);
  }

  const handleContextMenu = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setOrbitMode(!orbitMode);
  };

  const handleWheel = (event) => {
    if (!fly) return;
    if (event.deltaY > 0 && speed - acceleration > -100) {
      setSpeed(speed - acceleration);
      //  camSpeed.current -= acceleration;
    } else if (event.deltaY < 0 && speed + acceleration < 100) {
      setSpeed(speed + acceleration);
      // camSpeed.current += acceleration;
    }
  };
  const handlePointerMove = (event) => {
    event.stopPropagation();
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    const clientY = event.touches ? event.touches[0].clientY : event.clientY;
    lastX.current = clientX;
    lastY.current = clientY;
    console.log(
      "lastX=",
      lastX.current,
      "lastY=",
      lastY.current,
      "joystickCenterX=",
      joystickCenterX,
      "joystickCenterY=",
      joystickCenterY,
      "joystickRadius=",
      joystickRadius
    );
    if (isMobileDevice) {
      speedRotationY.current =
        ((Math.max(joystickMinX, Math.min(lastX.current, joystickMaxX)) -
          joystickCenterX) /
          joystickRadius) *
        koefRotation;
      // Normalize  lastY.current values to be in the range [joystickMinY, joystickMaxY] with respect to joystickCenterY
      speedRotationX.current =
        ((Math.max(joystickMinY, Math.min(lastY.current, joystickMaxY)) -
          joystickCenterY) /
          joystickRadius) *
        koefRotation;

      console.log(
        ((Math.max(joystickMinX, Math.min(lastX.current, joystickMaxX)) -
          joystickCenterX) /
          joystickRadius) *
          koefRotation
      );
    } else {
      speedRotationY.current =
        ((lastX.current - centerX) / window.innerWidth) * koefRotation;

      speedRotationX.current =
        ((lastY.current - centerY) / window.innerHeight) * koefRotation;
    }
  };

  function handleOrientation(event) {
    const { beta, gamma } = event;
    // event.beta represents the front-to-back tilt in degrees
    // event.gamma represents the left-to-right tilt in degrees
    // Normalize beta and gamma values to be in the range [-90, 90] degrees
    degreeBeta.current = Math.max(-90, Math.min(beta, 90));
    degreeGamma.current = Math.max(-90, Math.min(gamma, 90));

    // Calculate rotation based on beta and gamma values
    speedRotationY.current = (degreeGamma.current / 90) * koefRotation;
    speedRotationX.current = (degreeBeta.current / 90) * koefRotation;
  }

  useEffect(() => {
    if (fly) camSpeed = speed;
    else camSpeed = 0;
    const canvas = gl.domElement;
    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("click", handleClick);
    canvas.addEventListener("contextmenu", handleContextMenu);
    window.addEventListener("wheel", handleWheel);
    canvas.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("deviceorientation", handleOrientation);
    // canvas.addEventListener("pointerdown", handlePointerDown);
    // canvas.addEventListener("pointerup", handlePointerUp);
    // canvas.addEventListener("pointermove", handlePointerMove);
    // window.addEventListener("keydown", handleKeyDown);
    // window.addEventListener("keyup", handleKeyUp);
    // canvas.addEventListener("touchstart", handleTouchStart);
    // canvas.addEventListener("touchend", handleTouchEnd);
    // canvas.addEventListener("touchmove", handleTouchMove);

    // Remove event listeners when component unmounts
    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("click", handleClick);
      canvas.removeEventListener("contextmenu", handleContextMenu);
      window.removeEventListener("wheel", handleWheel);
      canvas.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("deviceorientation", handleOrientation);
      // canvas.removeEventListener("pointerdown", handlePointerDown); // Pointer Events API
      // canvas.removeEventListener("pointerup", handlePointerUp);
      // canvas.removeEventListener("pointermove", handlePointerMove);
      // window.removeEventListener("keydown", handleKeyDown);
      // window.removeEventListener("keyup", handleKeyUp);
      // canvas.removeEventListener("touchstart", handleTouchStart);
      // canvas.removeEventListener("touchend", handleTouchEnd);
      // canvas.removeEventListener("touchmove", handleTouchMove);
    };
    //}, [gl, handlePointerMove, fly]);
  }, [gl, handlePointerMove, fly, orbitMode, speed]);

  useFrame((_, delta) => {
    camera.position.set(location[0], location[1], location[2]);
    // Get current camera position
    const currentPosition = camera.position.clone();
    // Calculate distance from center of sphere
    const distanceFromCenter = currentPosition.distanceTo(
      skyRef.current.position
    );

    // If camera tries to get outside sphere, move it 10 units backward
    if (distanceFromCenter > maxRadiusCameraPosition) {
      //  camSpeed = 0;
      const direction = currentPosition
        .sub(skyRef.current.position)
        .normalize();
      const newPosition = skyRef.current.position
        .clone()
        .add(direction.multiplyScalar(maxRadiusCameraPosition - 10));
      camera.position.copy(newPosition);
    }

    camera.rotateY(-speedRotationY.current * Math.PI);
    camera.rotateX(-speedRotationX.current * Math.PI);

    camera.translateZ(-camSpeed / 2);

    if (orbitMode) {
      camera.translateX(3);
    }

    setLocation([camera.position.x, camera.position.y, camera.position.z]);
  });

  return (
    <mesh ref={skyRef} scale={[1000, 1000, 1000]} position={[0, 0, 0]}>
      <primitive
        object={sky.scene}
        // onPointerMove={(event) => handlePointerMove(event)}
        // onMouseDown={(event) => handleMouseDown(event)}
        // onMouseUp={(event) => handleMouseUp(event)}
        // onClick={(event) => handlePointerClick(event)}
      />
    </mesh>
  );
}
