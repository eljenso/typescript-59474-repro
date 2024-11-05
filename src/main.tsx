/* eslint-disable react-refresh/only-export-components */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Stack, Button } from "@mui/material";
import { Canvas } from "@react-three/fiber";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Buttons />

    <ThreeCanvas />
  </StrictMode>
);

function Buttons(): JSX.Element {
  return (
    <Stack spacing={2} direction="row">
      <Button onClick={(event) => console.log({ event })} variant="text">
        Text
      </Button>
      <Button onClick={(event) => console.log({ event })} variant="contained">
        Contained
      </Button>
      <Button onClick={(event) => console.log({ event })} variant="outlined">
        Outlined
      </Button>
    </Stack>
  );
}

function ThreeCanvas(): JSX.Element {
  return (
    <Canvas>
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshPhongMaterial />
      </mesh>
      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 0, 5]} color="red" />
    </Canvas>
  );
}
