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
  const [data, setdata] = useState("");
  const [page, setPage] = useState(1);

  const request_page = (page) => {
    API.post("/home", { page: page }).then((res) => {
      setdata(res.data)
    });
  };

  useEffect(() => {
    const get_page = () => {
      API.get("/").then((res) => {
        if (isMounted) setdata(res.data);
      });
    };

    let isMounted = true;
    get_page();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleChange = (e, page) => {
    setPage(page);
    request_page(page);
  };

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
            count={data.pagination.last_visible_page}
            onChange={handleChange}
            shape="rounded"
            sx={{ margin: "auto", p: 1 }}
          />
          <Grid container spacing={2} justifyContent="space-evenly">
            {data.data.map((data) => (
              <Grid item key={data.title}>
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
