import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";

export default function Three() {
  const angleToRadians = (angleInDeg) => (Math.PI / 100) * angleInDeg;
  const orbitControlsRef = useRef(null);
  useFrame((state) => {
    // console.log(state.mouse);
  });
  useEffect(() => {
    if (!!orbitControlsRef.current) {
      console.log(orbitControlsRef.current);
    }
  }, [orbitControlsRef.current]);
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 1, 5]} />
      <OrbitControls ref={orbitControlsRef} />
      {/* ball */}
      <mesh position={[0, 0.5, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#FFFFFF" />
      </mesh>

      {/* floor  */}
      <mesh rotation={[-angleToRadians(90), 0, 0]}>
        <planeGeometry args={[4, 4]} />
        <meshStandardMaterial color="#ADD8E6" />
      </mesh>
      {/* light */}
      <ambientLight args={["#FFFFFF", 1]} />
    </>
  );
}
