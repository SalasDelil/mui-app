import React from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

const Rightbar = () => {
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
      <Box position="fixed" width="23%">
        <Typography variant="h6" fontWeight={100} mb={2}>
          Online Friends
        </Typography>
        <AvatarGroup max={4}>
          <Avatar
            alt="Remy Sharp"
            src="https://th.bing.com/th/id/OIP.GlXqxcR9EmviN5kuwaUsMQHaIB?pid=ImgDet&rs=1"
          />
          <Avatar
            alt="Travis Howard"
            src="https://th.bing.com/th/id/OIP.4VQTn1jxChFq-hhuV7kQ7AHaHa?pid=ImgDet&rs=1"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://th.bing.com/th/id/OIP.jnieQvL1DtS8DEIMHGXQ8AHaLH?pid=ImgDet&rs=1"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://th.bing.com/th/id/OIP.2r5wqEPi_CvcNGmUprinPwHaIB?pid=ImgDet&rs=1"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://th.bing.com/th/id/R.e25be10c6c7045892eafd6798de89aec?rik=Oj9%2bZTntjISS2A&pid=ImgRaw&r=0"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://th.bing.com/th/id/R.e25be10c6c7045892eafd6798de89aec?rik=Oj9%2bZTntjISS2A&pid=ImgRaw&r=0"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://th.bing.com/th/id/OIP.PztowP3ljup0SM75tkDimQAAAA?pid=ImgDet&rs=1"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://th.bing.com/th/id/R.43fbd965c49839a3cc7319d731043df5?rik=R9xspfntYcsE9A&pid=ImgRaw&r=0"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mb={2} mt={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={4}>
          <ImageListItem>
            <img
              src="https://th.bing.com/th/id/OIP.fBvwX7wo8zvdGbJVgGsq5QHaGr?pid=ImgDet&rs=1"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://th.bing.com/th/id/OIP.1ATYXLgDr0itQPKb7NA9xwHaEK?w=312&h=180&c=7&r=0&o=5&pid=1.7"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://th.bing.com/th/id/OIP.5b4a93N73gHlploUfQMt2wHaHa?pid=ImgDet&rs=1"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://th.bing.com/th/id/OIP.jnieQvL1DtS8DEIMHGXQ8AHaLH?pid=ImgDet&rs=1"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="https://th.bing.com/th/id/OIP.GlXqxcR9EmviN5kuwaUsMQHaIB?pid=ImgDet&rs=1"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://th.bing.com/th/id/OIP.4VQTn1jxChFq-hhuV7kQ7AHaHa?pid=ImgDet&rs=1"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
