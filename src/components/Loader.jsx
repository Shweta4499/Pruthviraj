import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html
      as="div"
      position={[10, 0, 0]} // ⬅️ shifts the loader in 3D space to the right (adjust if needed)
      zIndexRange={[10, 0]} // makes sure it's on top
      transform // enables CSS transform styles
      wrapperClass="loader-wrapper" // optional for debugging
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span className="canvas-loader w-10 h-10 border-4 border-t-transparent border-[#915EFF] rounded-full animate-spin"></span>
        <p className="mt-6 text-sm font-extrabold text-[#F1F1F1]">
          {progress.toFixed(2)}%
        </p>
      </div>
    </Html>
  );
};

export default CanvasLoader;
