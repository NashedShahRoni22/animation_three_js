import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Three from "./components/three/three";

function App() {
  return (
    <section className="md:flex p-5">
      <div className="md:w-1/2">
        <h1 className="text-3xl font-bold">Explore Three Fiber</h1>
      </div>
      <div className="md:w-1/2">
        <Canvas className="!h-[60vh] bg-slate-300"> 
          <Suspense fallback={null}>
            <Three />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
}

export default App;