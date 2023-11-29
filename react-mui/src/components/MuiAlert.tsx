import { Alert, AlertTitle, Button, Stack } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import React from 'react'

const MuiAlert = () => {
  return (
    <Stack spacing={2}>
        <Alert severity='error'>This is an error alert — check it out!</Alert>
        <Alert severity='warning' variant='outlined'>This is an warning alert — check it out!</Alert>
        <Alert severity='info' variant='filled'>This is an info alert — check it out!</Alert>
        <Alert severity='success'>
            <AlertTitle>Success</AlertTitle>
            This is an success alert — check it out!
        </Alert>

        <Alert severity='success' icon={<CheckIcon fontSize='inherit'/>}>
            <AlertTitle>Success</AlertTitle>
            This is an success alert — check it out!
        </Alert>

        <Alert severity='success' icon={<CheckIcon fontSize='inherit'/>} onClose={() => alert('Alert closed')}>
            <AlertTitle>Success</AlertTitle>
            This is an success alert — check it out!
        </Alert>

        <Alert severity='success' icon={<CheckIcon fontSize='inherit'/>} onClose={() => alert('Alert closed')} action={
            <Button size='small' color='inherit'>
                Undo
            </Button>
        }>
            <AlertTitle>Success</AlertTitle>
            This is an success alert — check it out!
        </Alert>
    </Stack>
  )
}

export default MuiAlert
