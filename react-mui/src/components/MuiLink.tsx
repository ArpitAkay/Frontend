import { Link, Stack, Typography } from '@mui/material'
import React from 'react'

const MuiLink = () => {
  return (
    <Stack spacing={2} direction={'row'} m={4}>
        <Link href='#'>Link</Link>
        <Link href='#' color={'secondary'}>Link</Link>
        <Link href='#' color={'error'} underline='hover'>Link</Link>
        <Typography variant='h6'>
            <Link href='#' color={'error'} underline='none'>Link</Link>
        </Typography>
        <Link href='#' color={'error'} underline='none' variant='body2'>Link</Link>
    </Stack>
  )
}

export default MuiLink
