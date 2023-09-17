import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";

export default function Three() {
  const angleToRadians = (angleInDeg) => (Math.PI / 100) * angleInDeg;
  const orbitControlsRef = useRef(null);
  useFrame((state) => {
    if (!!orbitControlsRef.current) {
      const {x,y} = state.mouse;
      orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(45));
      orbitControlsRef.current.setPolarAngle((y + 1) * angleToRadians(90 - 30));
      orbitControlsRef.current.update();
    }
  });
  useEffect(() => {
    if (!!orbitControlsRef.current) {
      console.log(orbitControlsRef.current);
    }
  }, [orbitControlsRef.current]);
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
      <OrbitControls ref={orbitControlsRef} enableZoom={false} minPolarAngle={angleToRadians(40)} maxPolarAngle={angleToRadians(50)}/>
      {/* ball */}
      <mesh position={[0, 0.5, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* floor  */}
      <mesh rotation={[-angleToRadians(45), 0, 0]}>
        <planeGeometry args={[4, 4]} />
        <meshStandardMaterial color="#ADD8E6" />
      </mesh>
      {/* ambient light */}
      <ambientLight args={["#ffffff", .25]} />
      {/* directional light */}
      <directionalLight args={["#ffffff", 1]} position={[-3, 1, 0]} />
    </>
  );
}
