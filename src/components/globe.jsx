// src/components/Globe.jsx
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function WireGlobe() {
    const meshRef = useRef();

    // Rotation lente automatique
    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.0015;
        }
    });

    return (
        <mesh ref={meshRef}>
            <sphereGeometry args={[3.3, 40, 40]} />
            <meshBasicMaterial
                color="#00A288"
                wireframe
                transparent
                opacity={0.15}
            />
        </mesh>
    );
}

export default function Globe() {
    return (
        <Canvas
            camera={{ position: [0, 0, 6] }}
            style={{ width: "100%", height: "100%" }}
        >
            <ambientLight intensity={1} />
            <WireGlobe />
        </Canvas>
    );
}
