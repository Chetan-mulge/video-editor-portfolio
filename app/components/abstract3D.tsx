"use client";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Stars } from "@react-three/drei";
import * as THREE from "three";
import Abstract3D from "../components/abstract3D";
function RotatingGold() {
  // Type assertion for the ref because TypeScript is strict about Three.js objects
  const meshRef = useRef<THREE.Mesh>(null!);

  // Rotate the object every frame
  useFrame((state, delta) => {
    if (meshRef.current) {
        meshRef.current.rotation.x += delta * 0.2;
        meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef} scale={1.8}>
        {/* A Torus Knot gives a complex, cinematic shape */}
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        {/* Physical material that looks metallic and glowing */}
        <meshPhysicalMaterial
          color="#D4AF37" // Gold
          emissive="#D4AF37" // Glow color
          emissiveIntensity={0.5}
          metalness={0.9}
          roughness={0.1}
          clearcoat={1}
          wireframe={true} // Wireframe makes it look futuristic/data-driven
        />
      </mesh>
    </Float>
  );
}

export default function abstract3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#D4AF37" />
        <RotatingGold />
        <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
        <Environment preset="city" />
      </Canvas>
      {/* I DELETED THE BLACK OVERLAY DIV FROM HERE */}
    </div>
  );
}