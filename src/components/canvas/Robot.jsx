import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Preload, useGLTF, useAnimations } from "@react-three/drei";
import CanvasLoader from "../Loader";

// === Robot Model Component ===
const RobotModel = ({ deviceType }) => {
  const group = useRef();
  const { scene, animations } = useGLTF("./robot/scene.glb");
  const { actions } = useAnimations(animations, group);

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

  // Device-based transform
  const { scale, position } = (() => {
    if (deviceType === "mobile") return { scale: 8, position: [0.5, -4.2, 0] };
    if (deviceType === "tablet") return { scale: 12, position: [4, -4.1, 0] };
    return { scale: 20, position: [10, -4, 0] }; // desktop
  })();

  return (
    <group ref={group} scale={scale} position={position} rotation={[0, 0, 0]}>
      <primitive object={scene} />
    </group>
  );
};

// === Main Canvas ===
const RobotCanvas = () => {
  const [deviceType, setDeviceType] = useState("desktop");

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      if (width <= 640) return "mobile";
      if (width <= 1024) return "tablet";
      return "desktop";
    };

    const updateDeviceType = () => setDeviceType(checkDevice());

    updateDeviceType();
    window.addEventListener("resize", updateDeviceType);
    return () => window.removeEventListener("resize", updateDeviceType);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full z-0">
      <Canvas
        frameloop="always"
        shadows
        dpr={[1, 2]}
        camera={{
          position:
            deviceType === "mobile"
              ? [0, 2, 12]
              : deviceType === "tablet"
              ? [0, 3, 18]
              : [-1, 4, 22],
          fov: deviceType === "mobile" ? 75 : 50,
        }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
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

          <RobotModel deviceType={deviceType} />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default RobotCanvas;
