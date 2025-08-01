import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload, Stars } from "@react-three/drei";

const StarsCanvas = () => {
  return (
    
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [0, 0, 1] }}
    >
      <Suspense fallback={null}>
        <Stars radius={80} depth={50} count={5000} factor={4} saturation={0} fade speed={0.8} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default StarsCanvas; 