import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import {
  MoreVertOutlined,
  ShareOutlined,
  StarRounded,
  StarHalfRounded,
} from "@mui/icons-material";
import React from "react";
import { blue } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

const Tags = styled("div")({
  marginTop: "10px",
});
const Stars = styled("div")({
  marginTop: "10px",
});

const CardTemplate = ({ template }) => {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertOutlined />
            </IconButton>
          }
          title={template.title}
          subheader={template.downloads}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {template.description}
          </Typography>
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
        <Divider />
        <CardActions disableSpacing>
          <IconButton aria-label="share">
            <ShareOutlined />
          </IconButton>
          <Typography variant="body4" color="text.secondary">
            {template.category.toUpperCase()}
          </Typography>
        </CardActions>
      </Card>
    </div>
  );
};

export default CardTemplate;
