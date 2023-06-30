import React from "react";
import { Box } from "@mui/material";
import Leftbar from "./Leftbar";

const Sidebar = ({ mode, setMode }) => {
  return (
    <Box
      position="static"
      flex={2}
      p={2}
      // sx={{ display: { xs: "none", sm: "block" } }}
      sx={{
        display: "none",
        "@media (min-width: 600px)": {
          display: "block",
        },
      }}
    >
      <Leftbar mode={mode} setMode={setMode} />
    </Box>
  );
};

export default Sidebar;
