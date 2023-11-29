import { Button, ButtonGroup, Stack } from '@mui/material'
import React from 'react'

const MuiButtonGroup = () => {
  return (
    <Stack direction={"row"}>
        <ButtonGroup 
        variant={"outlined"} 
        orientation='vertical'
        size='small'
        color='secondary'
        aria-label='vertical outlined primary button group'
        >
            <Button onClick={() => alert("left")}>Left</Button>  
            <Button onClick={() => alert("center")}>Center</Button>  
            <Button onClick={() => alert("right")}>Right</Button>  
        </ButtonGroup>
    </Stack>
  )
}

export default MuiButtonGroup
