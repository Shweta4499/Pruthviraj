import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Preload, useGLTF, useAnimations } from "@react-three/drei";
import CanvasLoader from "../Loader";

// === Robot Model Component ===
const RobotModel = ({ isMobile }) => {
  const group = useRef();
  const { scene, animations } = useGLTF("./robot/scene.glb");
  const { actions } = useAnimations(animations, group);

  // Play idle animation if available
  useEffect(() => {
    const actionNames = Object.keys(actions);
    if (actionNames.length > 0) {
      actions[actionNames[0]].reset().fadeIn(0.5).play();
    }
  }, [actions]);

  // Continuous Y-axis rotation
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.01;
    }
  });

  return (
    <group
      ref={group}
      scale={isMobile ? 8 : 20}
      position={isMobile ? [0.5, -6.2, 0] : [10, -4, 0]}
      rotation={[0, 0, 0]}
    >
      <primitive object={scene} />
    </group>
  );
};

// === Main Robot Canvas Component ===
const RobotCanvas = ({ isMobile: propIsMobile }) => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen size
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    setIsMobile(mediaQuery.matches);

    const handler = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const mobile = propIsMobile ?? isMobile;

  return (
    <div className="absolute inset-0 w-full h-full z-0">
      <Canvas
        frameloop="always"
        shadows
        dpr={[1, 2]}
        camera={{
          position: mobile ? [0, 2, 12] : [-1, 4, 22],
          fov: mobile ? 75 : 50,
        }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          {/* Lighting */}
          <ambientLight intensity={0.6} />
          <directionalLight position={[0, 20, 10]} intensity={2} castShadow />
          <spotLight
            position={[5, 8, 15]}
            angle={0.4}
            penumbra={1}
            intensity={5}
            castShadow
            color={"#915EFF"}
          />
          <pointLight position={[0, 5, 10]} intensity={2.5} color="#00ffff" />

          {/* Robot Model */}
          <RobotModel isMobile={mobile} />
        </Suspense>

        {/* Optional: preload all assets */}
        <Preload all />
      </Canvas>
    </div>
  );
};

export default RobotCanvas;
