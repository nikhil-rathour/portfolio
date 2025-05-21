import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Html } from '@react-three/drei';

const Loader = () => {
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center space-y-6">
        {/* Animated gradient circles */}
        <div className="relative w-24 h-24">
          {/* Outer ring - blue gradient */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 border-r-cyan-400 animate-spin-slow"></div>
          
          {/* Middle ring - purple gradient */}
          <div className="absolute inset-3 rounded-full border-4 border-transparent border-t-purple-500 border-r-pink-500 animate-spin-slow-reverse"></div>
          
          {/* Inner dot - pulsing gradient */}
          <div className="absolute inset-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 animate-pulse-slow"></div>
        </div>
        
        {/* Text with gradient */}
        <div className="text-center">
          <p className="text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Assembling Iron Man...
          </p>
          
        </div>
        
        {/* Mini progress bar */}
        <div className="w-40 h-1.5 bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 animate-progress"></div>
        </div>
      </div>
    </Html>
  );
};

const IronManModel = () => {
  const iromanRef = useRef();
  const { scene } = useGLTF('ironman_mark_85_custom_painted/scene.gltf');

  useFrame(() => {
    if (iromanRef.current) {
      iromanRef.current.rotation.y += 0.01;
    }
  });

  return (
    <primitive 
      ref={iromanRef} 
      object={scene} 
      scale={3.2} 
      position={[0, -5.5, 0]}
    />
  );
};

const IronManCanvas = () => {
  return (
    <Canvas
      style={{ width: '100%', height: '100%' }}
      camera={{ 
        position: [0, 1, 15],
        fov: 45, 
        near: 0.1, 
        far: 1000 
      }}
    >
      <ambientLight intensity={2} />
      <directionalLight position={[7, 5, 5]} intensity={19} />

      <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        enablePan={false}
      />

      <Suspense fallback={<Loader />}>
        <IronManModel />
      </Suspense>
    </Canvas>
  );
};

export default IronManCanvas;