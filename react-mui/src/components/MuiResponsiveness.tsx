import { Box, styled } from '@mui/material'
import React from 'react'

const StyledBox = styled(Box)(({theme}) => ({
    height: '250px',
    width: '250px',
    // backgroundColor: theme.status.danger
    // backgroundColor: theme.palette.neutral.main
    backgroundColor: theme.palette.neutral?.darker
}))

const MuiResponsiveness = () => {
  return (
    <>
        <Box sx={{
        height: 300, 
        width: {
            xs: 100,    // vw > 0
            sm: 200,    // vw >= 600
            md: 300,    // vw >= 900
            lg: 400,    // vw >= 1200
            xl: 500     // vw >= 1536
        }, 
        bgcolor: 'secondary.light'}}>
        </Box>
        <StyledBox/>
    </>
  )
}

export default MuiResponsiveness
