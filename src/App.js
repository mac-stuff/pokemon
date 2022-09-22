import { ThemeProvider, createTheme } from "@mui/material/styles";
import Layout from "./components/Layout";

const theme = createTheme({
  palette: {
    primary: {
      main: "#b2c2bf",
    },
    secondary: {
      main: "#3b3a30",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
