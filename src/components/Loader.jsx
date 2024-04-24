import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html>
      <div className="fixed left-0 top-0 w-full h-full flex justify-center items-center">
        <div className="w-20 h-20 border-2 border-opacity-80  border-t-purple-600 rounded-full animate-spin"></div>
      </div>
    </Html>
  );
};

export default Loader;
