import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { type Theme } from "@mui/material";
import App from "./App";

import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const container = document.getElementById("root");
if (!container) throw new Error("Root element not found");
const primaryMain = "#dc143c"; // crimson
const secondaryMain = "#0f766e"; // complementary teal/green

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: primaryMain,
      contrastText: "#ffffff",
    },
    secondary: {
      main: secondaryMain,
      contrastText: "#ffffff",
    },
    mode: "light",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
        },
      },
      variants: [
        {
          props: { variant: "outlined", color: "primary" },
          style: {
            color: primaryMain,
            borderColor: primaryMain,
            borderWidth: "1px",
            '&:hover': {
              backgroundColor: "rgba(220,20,60,0.06)",
            },
          },
        },
        {
          props: { variant: "contained", color: "primary" },
          style: {
            backgroundColor: primaryMain,
            color: "#ffffff",
            '&:hover': {
              backgroundColor: "#b20f31",
            },
          },
        },
      ],
    },
  },
});

createRoot(container).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
);
