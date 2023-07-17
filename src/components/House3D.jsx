import React, { useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
 
function House3D(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.y += 0.006));
  // Return the view, these are regular Threejs elements expressed in JSX
  const gltf = useLoader(GLTFLoader, props.url);

  return (
    <mesh
      {...props}
      ref={ref}
      scale={.01}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <primitive object={gltf.scene} />;
      <meshStandardMaterial
        wireframe={props.wireframe}
      />
    </mesh>
  );
}
 
export default House3D;