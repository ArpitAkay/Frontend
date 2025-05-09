import { Rating, Stack } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React, { useState } from 'react'

const MuiRating = () => {
    const [value, setValue] = useState<number | null>(2);
    console.log(value)
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number | null) => {
        setValue(newValue);
    }

  return (
    // <Stack spacing={2}>
    <>
      <Rating value={value} onChange={handleChange} precision={0.5} size='small'/>
      <br />
      <Rating value={value} onChange={handleChange} precision={0.5} size='small' 
      icon={<FavoriteIcon fontSize='inherit' color='error'/>}
      emptyIcon={<FavoriteBorderIcon fontSize='inherit'/>} highlightSelectedOnly/>
    </>
    // </Stack>
  )
}

export default MuiRating
