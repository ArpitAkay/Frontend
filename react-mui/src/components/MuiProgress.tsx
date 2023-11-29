import { CircularProgress, LinearProgress, Stack } from '@mui/material'
import React from 'react'

const MuiProgress = () => {
  return (
    <Stack spacing={2}>
        <CircularProgress />
        <CircularProgress color='secondary'/>
        <CircularProgress variant='determinate' value={60} color='secondary'/>
        <LinearProgress />
        <LinearProgress color='secondary'/>
        <LinearProgress variant='determinate' value={60} color='secondary'/>
    </Stack>
  )
}

export default MuiProgress
