import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import {
  MoreVertOutlined,
  FavoriteOutlined,
  ShareOutlined,
  StartOutlined,
  StarOutlined,
  StarOutlineOutlined,
  StarHalfOutlined,
  StarOutlineRounded,
  StarHalfRounded,
  StarRateRounded,
  StarRounded,
} from "@mui/icons-material";
import React from "react";
import { blue, red } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

const Tags = styled("div")({
  margin: "-30px 0 0 58px",
});
const Stars = styled("div")({
  margin: "0 0 0 55px",
});

const Item = styled("Card")({
  border: "none",
});
const CardTemplateResume = ({ template }) => {
  return (
    <div>
      <Item sx={{ maxWidth: 345 }} variant="outlined">
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          // action={
          //   <IconButton aria-label="settings">
          //     <MoreVertOutlined />
          //   </IconButton>
          // }
          title={template.title}
          subheader={template.category.toUpperCase()}
        />
        {/* <CardMedia
          component="img"
          height="194"
          image="/static/images/cards/paella.jpg"
          alt="Paella dish"
        /> */}
        <CardContent>
          {/* <Typography variant="body2" color="text.secondary">
            {template.description}
          </Typography> */}
          <Tags>
            <h5>{template.tags}</h5>
          </Tags>
          <Stars>
            <StarRounded style={{ fill: "#f4b400" }} />
            <StarRounded style={{ fill: "#f4b400" }} />
            <StarRounded style={{ fill: "#f4b400" }} />
            <StarRounded style={{ fill: "#f4b400" }} />
            <StarHalfRounded style={{ fill: "#f4b400" }} />
          </Stars>
        </CardContent>
        {/* <Divider />
        <CardActions disableSpacing>
          <IconButton aria-label="share">
            <ShareOutlined />
          </IconButton>
          <Typography variant="body4" color="text.secondary">
            {template.category.toUpperCase()}
          </Typography>
        </CardActions> */}
      </Item>
    </div>
  );
};

export default CardTemplateResume;
