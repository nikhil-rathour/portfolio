import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

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
      scale={2.7} 
      position={[0, -4.5, 0]} // Adjust these values as needed
    />
  );
};

const IronManCanvas = () => {
  return (
     <Canvas
      style={{ width: '100%', height: '100%' }} // Fill container
      camera={{ 
        position: [0, 1, 15], // Adjusted for mobile (lower y-position)
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

      <Suspense fallback={null}>
        <IronManModel />
      </Suspense>
    </Canvas>
  );
};

export default IronManCanvas;

