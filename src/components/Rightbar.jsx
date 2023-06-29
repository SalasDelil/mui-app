import React from "react";
import { Avatar, AvatarGroup, Box , Typography } from "@mui/material";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={5}>
          <Avatar alt="Remy Sharp" src="https://th.bing.com/th/id/OIP.GlXqxcR9EmviN5kuwaUsMQHaIB?pid=ImgDet&rs=1" />
          <Avatar alt="Travis Howard" src="https://th.bing.com/th/id/OIP.4VQTn1jxChFq-hhuV7kQ7AHaHa?pid=ImgDet&rs=1" />
          <Avatar alt="Cindy Baker" src="https://th.bing.com/th/id/OIP.jnieQvL1DtS8DEIMHGXQ8AHaLH?pid=ImgDet&rs=1" />
          <Avatar alt="Agnes Walker" src="https://th.bing.com/th/id/OIP.2r5wqEPi_CvcNGmUprinPwHaIB?pid=ImgDet&rs=1" />
          <Avatar alt="Trevor Henderson" src="https://th.bing.com/th/id/R.e25be10c6c7045892eafd6798de89aec?rik=Oj9%2bZTntjISS2A&pid=ImgRaw&r=0" />
          <Avatar alt="Trevor Henderson" src="https://th.bing.com/th/id/R.e25be10c6c7045892eafd6798de89aec?rik=Oj9%2bZTntjISS2A&pid=ImgRaw&r=0" />
          <Avatar alt="Trevor Henderson" src="https://th.bing.com/th/id/OIP.PztowP3ljup0SM75tkDimQAAAA?pid=ImgDet&rs=1" />
          <Avatar alt="Trevor Henderson" src="https://th.bing.com/th/id/R.43fbd965c49839a3cc7319d731043df5?rik=R9xspfntYcsE9A&pid=ImgRaw&r=0" />
          <Avatar alt="Trevor Henderson" src="" />
          <Avatar alt="Trevor Henderson" src="" />

        </AvatarGroup>
      </Box>
    </Box>
  );
};

export default Rightbar;
