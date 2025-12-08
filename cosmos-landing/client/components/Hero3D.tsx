import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useRef, useEffect } from "react";
import * as THREE from "three";

function RotatingCube() {
  const meshRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    const mesh = meshRef.current;
    if (!mesh) return;

    const animationId = requestAnimationFrame(function animate() {
      mesh.rotation.x += 0.003;
      mesh.rotation.y += 0.005;
      requestAnimationFrame(animate);
    });

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <material
        color="#f97316"
        wireframe={false}
        emissive="#fb923c"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}

function FloatingParticles() {
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    const group = groupRef.current;
    if (!group) return;

    const particles = group.children;
    const animationId = requestAnimationFrame(function animate() {
      particles.forEach((particle, i) => {
        particle.position.y += Math.sin(Date.now() * 0.001 + i) * 0.001;
        particle.rotation.x += 0.002;
        particle.rotation.y += 0.003;
      });
      requestAnimationFrame(animate);
    });

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <group ref={groupRef}>
      {[...Array(8)].map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.cos((i / 8) * Math.PI * 2) * 3,
            Math.sin(i * 0.5) * 2,
            Math.sin((i / 8) * Math.PI * 2) * 3,
          ]}
        >
          <sphereGeometry args={[0.3, 32, 32]} />
          <material color="#fbbf24" wireframe={false} emissive="#f59e0b" />
        </mesh>
      ))}
    </group>
  );
}

export function Hero3D() {
  return (
    <div className="w-full h-full min-h-96">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#fbbf24" />
        <RotatingCube />
        <FloatingParticles />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={2}
        />
      </Canvas>
    </div>
  );
}
