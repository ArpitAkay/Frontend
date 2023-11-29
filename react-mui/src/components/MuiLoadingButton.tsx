import { LoadingButton } from '@mui/lab'
import { Stack } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save'
import React from 'react'

const MuiLoadingButton = () => {
  return (
    <Stack spacing={2} direction={'row'}>
        <LoadingButton variant='outlined'>Submit</LoadingButton>
        <LoadingButton loading variant='outlined'>Submit</LoadingButton>
        <LoadingButton loading loadingIndicator='loading...' variant='outlined'>Submit</LoadingButton>
        <LoadingButton variant='outlined' loadingPosition='start' startIcon={<SaveIcon />}>Submit</LoadingButton>
        <LoadingButton variant='outlined' loading loadingPosition='start' startIcon={<SaveIcon />}>Submit</LoadingButton>
    </Stack>
  )
}

export default MuiLoadingButton
