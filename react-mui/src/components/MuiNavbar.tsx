import React from 'react'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import { AppBar, Button, IconButton, Menu, MenuItem, Stack, Toolbar, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const MuiNavbar = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    const open = Boolean(anchorEl);

  return (
    <AppBar position='static'>
        <Toolbar>
            <IconButton aria-label='logo' size='large' edge='start' color='inherit'>
                <CatchingPokemonIcon/>
            </IconButton>
            <Typography variant='h6' component={'div'} sx={{flexGrow: 1}}>
                Pokemon App
            </Typography>
            <Stack direction={'row'} spacing={1}>
                <Button color='inherit'>Features</Button>
                <Button color='inherit'>Pricing</Button>
                <Button color='inherit'>About</Button>
                <Button color='inherit' id='resources-button' onClick={handleClick} aria-controls={open ? 'resouces-menu' : undefined} aria-haspopup='true' aria-expanded={open ? 'true' : undefined} endIcon={<KeyboardArrowDownIcon />}>Resouces</Button>
                <Button color='inherit'>Login</Button>
            </Stack>
            <Menu id='resources-menu' anchorEl={anchorEl} open={open} MenuListProps={{'aria-labelledby': 'resouces-button'}} onClose={handleClose} anchorOrigin={{vertical: 'bottom', horizontal: 'right'}} transformOrigin={{vertical: 'top', horizontal: 'right'}}>
                <MenuItem>Blog</MenuItem>
                <MenuItem>Podcast</MenuItem>
            </Menu>
        </Toolbar>
    </AppBar>
  )
}

export default MuiNavbar
