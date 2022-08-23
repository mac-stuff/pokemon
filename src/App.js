import Navbar from "./components/navbar/index";
import { Container } from "@mui/system";
import { Stack } from "@mui/material";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";

function App() {
  return (
    <Container>
      <Navbar></Navbar>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar></Sidebar>
        <Feed></Feed>
        <Rightbar></Rightbar>
      </Stack>
    </Container>
  );
}

export default App;
