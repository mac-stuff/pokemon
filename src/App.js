import Navbar from "./components/navbar/index";
import Search from "./components/search/index";
import { Container } from "@mui/system";
import { Stack } from "@mui/material";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState();

  return (
    <Container>
      <Navbar />
      <Search setUserInput={setUserInput} />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Feed userInput={userInput}></Feed>
        <Rightbar></Rightbar>
      </Stack>
    </Container>
  );
}

export default App;
