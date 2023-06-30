import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light")

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Box paddingTop={2} m={-1} bgcolor={"background.default"} color="text.primary">
        <Navbar mode={mode} setMode={setMode} />
        <Stack direction="row" justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
