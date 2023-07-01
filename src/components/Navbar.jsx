import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  InputBase,
  Box,
  Badge,
  Avatar,
  Menu,
  MenuItem
} from "@mui/material";
import {
  Mail,
  Notifications,
  Widgets
} from "@mui/icons-material";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import Leftbar from "./Leftbar";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = ({ mode, setMode }) => {
  const [open, setOpen] = useState(false);
  const [widget, setWidget] = useState(false);

  const Search = styled("div")(({ theme }) => ({
    display: "flex",
    gap: "6px",
    alignItems: "center",
    backgroundColor: "rgb(180, 180, 180)",
    padding: "4px 10px",
    borderRadius: "20px",
    width: "40%",
  }));

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Gebeta
        </Typography>
        <Widgets
          onClick={(e) => setWidget(true)}
          sx={{ display: { xs: "block", sm: "none" } }}
        />
        <Menu
          id="positioned-menu"
          aria-labelledby="positioned-button"
          onClose={(e) => setWidget(false)}
          open={widget}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          sx={{
            bgcolor: "background.default",
            width: "50%", height: "60%",
            display: "block",
            "@media (min-width: 600px)": {
              display: "none",
            },
          }}
        >
          <Leftbar mode={mode} setMode={setMode} />
        </Menu>
        <Search>
          <SearchIcon />
          <InputBase padding={4} placeholder="Search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={3} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="./images/sali.jpg"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar sx={{ width: 30, height: 30 }} src="./images/Mesi.jpg" />
          <Typography variant="span">Salas</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="positioned-menu"
        aria-labelledby="positioned-button"
        onClose={(e) => setOpen(false)}
        open={open}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
