import React from "react";
import {
  Box,
  Typography,
  Card,
  Grid,
  Pagination,
} from "@mui/material";
import axios from "axios";
import { AnimeCard } from "../anime-card/anime_card";
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
                <AnimeCard data={ data } />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Box>
  );
};
export default Main;
