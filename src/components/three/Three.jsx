import { PerspectiveCamera } from "@react-three/drei";
import React from "react";

export default function Three() {
  const angleToRadius = (angleInDeg) => (Math.PI / 100) * angleInDeg;
  return (
    <>
      <PerspectiveCamera makeDefault position={[0 , 1 ,5]}/>
      {/* ball */}
      <mesh position={[0,0.5,0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#FFFFFF" />
      </mesh>

      {/* floor  */}
      <mesh rotation={[-(angleToRadius(90)), 0, 0]}>
        <planeGeometry args={[7, 7]} />
        <meshStandardMaterial color="#lea3d8" />
      </mesh>
      {/* light */}
      <ambientLight args={["#FFFFFF", 1]} />
    </>
  );
}
