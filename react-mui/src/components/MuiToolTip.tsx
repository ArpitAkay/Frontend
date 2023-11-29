import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, Tooltip } from '@mui/material';

const MuiToolTip = () => {
  return (
    <Tooltip title={'Delete'} placement='left-start' arrow enterDelay={500} leaveDelay={200}>
        <IconButton aria-label='deleteButton'>
            <DeleteIcon />
        </IconButton>
    </Tooltip>
  )
}

export default MuiToolTip
