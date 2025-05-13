import React, { Suspense, useRef } from 'react';
import { Canvas , useFrame} from '@react-three/fiber';
import { OrbitControls, useGLTF ,} from '@react-three/drei';
const EarthModel = () => {

  const earthRef = useRef();
  const { scene } = useGLTF('/planet/scene.gltf');
console.log('Loaded scene:', scene);


  // Rotate Earth
  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.01; // Increase speed here
    }
  });

  return <primitive ref={earthRef} object={scene} scale={3.2} />;
};

const EarthCanvas = () => {
  return (
    <Canvas
      className="cursor-pointer"
      frameloop="demand"
      camera={{ position: [-4, 3, 6], fov: 45, near: 0.1, far: 200 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        enablePan={false}
      />

      <Suspense fallback={null}>
        <EarthModel />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;