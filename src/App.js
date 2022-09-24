import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";
import Layout from "./components/Layout";

const themeLight = createTheme({
  palette: {
    primary: {
      main: "#b2c2bf",
    },
    secondary: {
      main: "#3b3a30",
    },
  },
});

const themeDark = createTheme({
  palette: {
    primary: {
      main: "#3b3a30",
    },
    secondary: {
      main: "#b2c2bf",
    },
  },
});

function App() {
  const [themeColor, setThemeColor] = useState(true);

  return (
    <ThemeProvider theme={themeColor ? themeLight : themeDark}>
      <Layout themeColor={themeColor} setThemeColor={setThemeColor} />
    </ThemeProvider>
  );
}

export default App;
