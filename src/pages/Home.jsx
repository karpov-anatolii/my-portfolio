import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { HomeInfo, Loader } from "../components";
import { Sky, SpaceStation, Staircase, Planet } from "../models";
import Dashboard from "../components/Dashboard";
import Joystick from "../components/Joystick";

const Home = () => {
  const isMobileDevice =
    /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  const [currentStage, setCurrentStage] = useState(1);

  return (
    <section className="w-full h-screen relative ">
      <div className="absolute top-0 left-0 w-full h-full cabin z-10 pointer-events-none"></div>
      <div className="absolute top-[50%] translate-y-[-50%] max-w-[64rem] m-auto p-16 max-sm:p-4 max-sm:top-[40%] left-0 right-0 z-10 flex items-center justify-center pointer-events-none">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <div className="absolute bottom-[10%] max-sm:bottom-[2%]  left-0 right-0 z-10 flex items-center justify-center">
        <Dashboard />
      </div>

      {isMobileDevice && (
        <div className="w-[100px] h-[100px] absolute bottom-[25%]  right-3 z-1 pointer-events-none flex items-center justify-center">
          <Joystick />
        </div>
      )}

      <Canvas
        className={`w-full h-screen bg-transparent `}
        camera={{
          near: 0.1,
          far: 100000,
          fov: 70,
          aspect: window.innerWidth / window.innerHeight,
          position: [0, 0, 0],
        }}
      >
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

          <Sky isMobileDevice={isMobileDevice} />

          <SpaceStation
            position={[0, 1000, -1400]}
            rotation={[20, 50, 0]}
            scale={[2, 2, 2]}
          />
          <Staircase
            position={[0, 0, 2200]}
            rotation={[0, 0, 0]}
            scale={[50, 50, 50]}
          />

          <Planet
            position={[0, 0, -2200]}
            rotation={[0, 0, 0]}
            scale={[1000, 1000, 1000]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
