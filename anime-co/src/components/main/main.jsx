import React from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  Grid,
  Pagination,
  Chip,
} from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";

const API = axios.create({
  baseURL: "http://127.0.0.1:5000/",
});

const Main = () => {
  useEffect(() => {
    let isMounted = true;
    API.get("/").then((res) => {
      if (isMounted) setdata(res.data);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const [data, setdata] = useState("");
  console.log(data.data);
  return (
    <Box sx={{ mt: 6, p: 2 }}>
      <Typography variant="h5" color="inherit">
        Home
      </Typography>
      <Typography variant="caption" color="inherit">
        Welcome to the anime archive
      </Typography>
      {data && (
        <>
          <Pagination
            count={10}
            shape="rounded"
            sx={{ margin: "auto", p: 1 }}
          />
          <Grid container spacing={2} justifyContent="space-evenly">
            {data.data.map((data) => (
              <Grid item>
                <Card
                  sx={{
                    width: { lg: 175, md: 120, xs: 100 },
                    height: { lg: 240, md: 180, xs: 130 },
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{ height: { lg: 240, md: 180, xs: 130 } }}
                    image={data.images.jpg.image_url}
                    alt={data.title}
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
                  {data.title}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Box>
  );
};
export default Main;
