/* eslint-disable react-refresh/only-export-components */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Stack, Button } from "@mui/material";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

function App(): JSX.Element {
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
