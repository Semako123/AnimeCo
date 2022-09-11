import React from 'react'
import { Box, Typography, Card, CardContent, CardMedia, CardActionArea } from '@mui/material'
import axios from 'axios'
import { useState, useEffect } from 'react'

const API = axios.create({
    baseURL:'http://127.0.0.1:5000/'
})

const Main = () => {
    useEffect(() =>
    {
        let isMounted = true;
        API.get('/').then((res) => { if (isMounted) (setdata(res.data));})
        return () => { isMounted = false }
        }, []
        
        
    )

    const [data, setdata] = useState('');
        console.log(data.data)
  return (
      <Box sx={{ mt: 6, p: 2 }}>
          <Typography variant="h5" color="inherit">Home</Typography>
          <Typography variant="caption" color="inherit">Welcome to the anime archive</Typography>
          { data && <><Card>
              <CardActionArea>
                  <CardMedia component='img'image={data.data.images.jpg.image_url} alt={data.data.title} height={100}/>
              </CardActionArea>
            </Card>
          <Typography variant="h6" color="inherit">{ data.data.title}</Typography> </>}
      </Box>
  )
}
export default Main