// components/canvas/SpaceshipCanvas.jsx
import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations, OrbitControls, Preload } from "@react-three/drei";

const SpaceshipModel = ({ triggerLaunch, isTyping }) => {
  const group = useRef();
  const { scene, animations } = useGLTF("/spaceship/scene.glb");
  const { actions, mixer } = useAnimations(animations, group);

  const [audio] = useState(() => new Audio("/audio/launch.mp3"));
  const [yOffset, setYOffset] = useState(3);
  const [targetY, setTargetY] = useState(3);
  const [isLaunching, setIsLaunching] = useState(false);

  useEffect(() => {
    const launchAction = actions["Animation"];
    if (!launchAction) return;

    if (triggerLaunch) {
      setIsLaunching(true);
      setTargetY(50); // fly up
      launchAction.reset().fadeIn(0.2).play();
      if (audio && !audio.played.length) audio.play();

      setTimeout(() => {
        setTargetY(3); // return back
        setTimeout(() => {
          launchAction.stop(); // ✅ Stop animation completely
          setIsLaunching(false);
        }, 1500); // delay to stop animation after it's settled
      }, 5000); // time before it returns
    } else if (isTyping && !isLaunching) {
      launchAction.reset().fadeIn(0.2).play();
    } else if (!isTyping && !triggerLaunch && !isLaunching) {
      launchAction.stop(); // 🛑 completely idle
    }
  }, [triggerLaunch, isTyping]);

  useFrame((_, delta) => {
    mixer?.update(delta);

    // Smoothly move toward the targetY
    setYOffset((prev) => {
      const diff = targetY - prev;
      if (Math.abs(diff) < 0.01) return targetY;
      return prev + diff * delta * 2.5;
    });
  });

  return (
    <group
      ref={group}
      position={[0, yOffset, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      scale={2.5}
    >
      <primitive object={scene} />
    </group>
  );
};

const SpaceshipCanvas = ({ triggerLaunch, isTyping }) => {
  return (
    <Canvas camera={{ position: [0, 5, 30], fov: 75 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={2.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <SpaceshipModel triggerLaunch={triggerLaunch} isTyping={isTyping} />
        <OrbitControls enableZoom={false} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default SpaceshipCanvas;
