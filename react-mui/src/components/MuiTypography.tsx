import { Typography } from '@mui/material'
import React from 'react'

const MuiTypography = () => {
  return (
    <div>
        <Typography variant='h1' gutterBottom>H1 Heading</Typography>
        <Typography variant='h2'>H2 Heading</Typography>
        <Typography variant='h3'>H3 Heading</Typography>
        <Typography variant='h4' component={"h1"}>H4 Heading</Typography>
        <Typography variant='h5'>H5 Heading</Typography>
        <Typography variant='h6'>H6 Heading</Typography>
        <Typography variant='subtitle1'>sub title 1</Typography>
        <Typography variant='subtitle2'>sub title 2</Typography>
        <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolorum quas fuga quis. Recusandae officia, saepe quia, odit, nostrum dignissimos voluptatibus harum rerum ea similique maxime accusantium blanditiis facilis ullam.</Typography>
        <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto inventore quod sed, mollitia possimus magnam recusandae in? Tempore incidunt nam eaque veritatis cupiditate fuga? Praesentium accusantium possimus tempora perspiciatis est!</Typography>
    </div>
  )
}

export default MuiTypography
