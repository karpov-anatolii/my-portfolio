import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { PerspectiveCamera } from "three";
import sakura from "../assets/sakura.mp3";
import { HomeInfo, Loader } from "../components";
import { soundoff, soundon } from "../assets/icons";
import { Bird, Island, Plane, Sky, SpaceStation, Staircase } from "../models";
import Dashboard from "../components/Dashboard";
import { Planet } from "../models/Planet";

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    // If screen width is less than 768px, adjust the scale and position
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43.4];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition];
  };

  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  return (
    <section className="w-full h-screen relative ">
      <div className="absolute top-0 left-0 w-full h-full cabin z-10 pointer-events-none"></div>
      <div className="absolute top-[50%] translate-y-[-50%] max-w-[64rem] m-auto p-16 max-sm:p-4 max-sm:top-[40%] left-0 right-0 z-10 flex items-center justify-center pointer-events-none">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <div className="absolute bottom-[10%] max-sm:bottom-[5%]  left-0 right-0 z-10 flex items-center justify-center">
        <Dashboard />
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{
          near: 0.1,
          far: 100000,
          fov: 70,
          aspect: window.innerWidth / window.innerHeight,
          position: [0, 0, 0],
        }}
      >
        {/* <PerspectiveCamera
          fov={75}
          aspect={window.innerWidth / window.innerHeight}
          near={0.1}
          far={1000}
          position={[0, 0, 5]} 
        />*/}
        <Suspense fallback={<Loader />}>
          <directionalLight position={[10000, 10000, 10000]} intensity={7} />
          <ambientLight intensity={0.4} />
          {/* <pointLight position={[10, 5, 10]} intensity={20} /> */}
          {/* <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={20}
          /> */}
          {/* <hemisphereLight
            skyColor="#aaff00"
            groundColor="#000000"
            intensity={1}
          /> */}

          {/* <Bird /> */}
          <Sky isRotating={isRotating} />
          {/* <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
          />*/}
          {/* <Plane
            position={biplanePosition}
            isRotating={isRotating}
            rotation={[0, 20.1, 0]}
            scale={biplaneScale}
          /> */}
          <SpaceStation
            position={[0, 500, -1000]}
            rotation={[0, 0, 0]}
            scale={[1, 1, 1]}
          />
          <Staircase
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={[50, 50, 50]}
          />

          <Planet
            position={[0, 0, -1700]}
            rotation={[0, 0, 0]}
            scale={[1000, 1000, 1000]}
          />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-2 left-2">
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt="jukebox"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className="w-10 h-10 cursor-pointer object-contain"
        />
      </div>
    </section>
  );
};

export default Home;
