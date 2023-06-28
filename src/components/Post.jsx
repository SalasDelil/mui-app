import React from "react";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton , Typography} from "@mui/material";
import { Checkbox, Favorite, FavoriteBorder, MoreVert , Share } from "@mui/icons-material";

const Post = () => {
    return (
        <Card sx={{margin: 5}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="John Doe"
          subheader="June 28, 2023"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://th.bing.com/th/id/R.2bf2ea7a50c934d82b29c4a63c019950?rik=Us7Pa86lV%2be3DQ&pid=ImgRaw&r=0"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    )
}

export default Post