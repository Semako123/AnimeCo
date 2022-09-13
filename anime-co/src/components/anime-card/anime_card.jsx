import React from "react";
import { Card, CardMedia, Typography} from "@mui/material";

export const AnimeCard = (props) => {
  return (
    <>
      <Card
        sx={{
          width: { lg: 175, md: 120, xs: 100 },
          height: { lg: 240, md: 180, xs: 130 },
        }}
      >
        <CardMedia
          component="img"
          sx={{ height: { lg: 240, md: 180, xs: 130 } }}
          image={props.data.images.jpg.image_url}
          alt={props.data.title}
        />
      </Card>
      <Typography
        variant="subtitle2"
        color="inherit"
        sx={{
          width: { lg: 175, md: 120, xs: 100 },
          fontSize: { md: 15, xs: 10 },
          textAlign: "center",
        }}
      >
        {props.data.title}
      </Typography>
    </>
  );
};
