// Composant Globe : rendu d’un globe filaire animé en 3D (React Three Fiber)

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function WireGlobe() {

    // Référence vers le mesh pour appliquer des transformations 3D
    const meshRef = useRef();

    // Dimensions du viewport utilisées pour adapter le rendu
    const { size } = useThree();

    // Ajustement du rayon selon la largeur de l’écran (mobile / desktop)
    const radius = size.width < 768 ? 3 : 3.3;
    
    // Rotation lente et continue du globe
    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.0015;
        }
    });

    return (

        <mesh ref={meshRef}>

            {/* Géométrie sphérique */}
            <sphereGeometry args={[radius, 40, 40]} />

            {/* Matériau filaire semi-transparent */}
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

        <Canvas camera={{ position: [0, 0, 6] }} style={{ width: "100%", height: "100%" }}>

            {/* Éclairage ambiant */}
            <ambientLight intensity={1} />

            {/* Globe filaire animé */}
            <WireGlobe />

        </Canvas>

    );
    
}
