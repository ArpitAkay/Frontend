import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import React from 'react'

const MuiBottomNavigation = () => {
    const [value, setValue] = React.useState(0);
    console.log(value);
  return (
    <BottomNavigation sx={{width: '100%', position: 'absolute', bottom: '0'}} value={value} onChange={(event, newValue) => setValue(newValue)} showLabels>
        <BottomNavigationAction label='Home' icon={<HomeIcon />}></BottomNavigationAction>
        <BottomNavigationAction label='Favorite' icon={<FavoriteIcon />}></BottomNavigationAction>
        <BottomNavigationAction label='Person' icon={<PersonIcon />}></BottomNavigationAction>
    </BottomNavigation>
  )
}

export default MuiBottomNavigation
