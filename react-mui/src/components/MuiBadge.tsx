import { Badge, Stack } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'
import React from 'react'

const MuiBadge = () => {
  return (
    <Stack spacing={3} direction={'row'}>
        <Badge badgeContent={5} color='primary'>
            <MailIcon />
        </Badge>
        <Badge badgeContent={0} color='secondary' showZero>
            <MailIcon />
        </Badge>
        <Badge badgeContent={1000} color='primary' max={999}>
            <MailIcon />
        </Badge>
        <Badge variant='dot' color='primary' invisible={true}>
            <MailIcon />
        </Badge>
    </Stack>
  )
}

export default MuiBadge
