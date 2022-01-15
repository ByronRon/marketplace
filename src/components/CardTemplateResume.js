import { Avatar, CardContent, CardHeader } from "@mui/material";
import { StarHalfRounded, StarRounded } from "@mui/icons-material";
import React from "react";
import { blue } from "@mui/material/colors";
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
          title={template.title}
          subheader={template.category.toUpperCase()}
        />
        <CardContent>
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
      </Item>
    </div>
  );
};

export default CardTemplateResume;
