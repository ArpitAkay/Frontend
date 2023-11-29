import { Avatar, AvatarGroup, Stack } from '@mui/material'
import React from 'react'

const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
        <Stack spacing={2} direction={'row'}>
            <Avatar sx={{backgroundColor: 'primary.light'}}>BW</Avatar>
            <Avatar sx={{backgroundColor: 'primary.main'}}>CK</Avatar>
        </Stack>
        <Stack spacing={2} direction={'row'}>
            <AvatarGroup max={3}>
                <Avatar sx={{backgroundColor: 'primary.light'}}>BW</Avatar>
                <Avatar sx={{backgroundColor: 'primary.main'}}>CK</Avatar>
                <Avatar src='https://randomuser.me/api/portraits/women/79.jpg' alt='79'></Avatar>
                <Avatar src='https://randomuser.me/api/portraits/women/80.jpg' alt='80'></Avatar>
            </AvatarGroup>
        </Stack>
        <Stack spacing={2} direction={'row'}>
            <Avatar variant='rounded' sx={{backgroundColor: 'primary.light', width: 48, height: 48}}>BW</Avatar>
            <Avatar variant='square' sx={{backgroundColor: 'primary.main', width: 48, height: 48}}>CK</Avatar>
        </Stack>
    </Stack>
  )
}

export default MuiAvatar
