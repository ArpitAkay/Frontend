import { Masonry } from '@mui/lab';
import { Box, Paper } from '@mui/material'
import React from 'react'

const MuiMasonry = () => {
    const heights = [150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80];


  return (
    <Box sx={{width: 500, minHeight: 400}}>
        <Masonry columns={4} spacing={2}>
            {
                heights.map((height, index) => (
                    <Paper key={index} sx={{height}}>
                        {index + 1}
                    </Paper>
                ))
            }
        </Masonry>
    </Box>
  )
}

export default MuiMasonry
