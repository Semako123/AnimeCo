import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Paper from '@mui/material/Paper'
export default function Footer() {
  const [value, setValue] = React.useState(0);

  return (
    
    <Box>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 , margin:'auto', marginBottom:'20px', width:{xs:'80%',md:'60%' ,lg:'50%'}}} elevation={3} color='secondary'>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon sx={{fontSize:{xs:20, md:25, lg:30} }} color='secondary' />} sx=  {{fontSize:{xs:15, md:20, lg:25} }} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon sx={{fontSize:{xs:20, md:25, lg:30} }}  color='secondary' />} sx={{fontSize:{xs:15, md:20, lg:25} }} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon sx={{fontSize:{xs:20, md:25, lg:30} }} color='secondary' />} sx={{fontSize:{xs:15, md:20, lg:25} }}/>
      </BottomNavigation>

        </Paper>
    </Box>
  );
}