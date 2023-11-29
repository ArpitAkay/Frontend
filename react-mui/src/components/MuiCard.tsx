import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const MuiCard = () => {
  return (
    <Box width={'300px'}>
      <Card>
        <CardMedia component={'img'} height={'140px'} image='https://source.unsplash.com/random' alt='Unsplash image'/>
        <CardContent>
           <Typography gutterBottom variant={'h5'} component={'div'}>React JS</Typography>
           <Typography variant='body2' color={'text-secondary'}>React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js.</Typography>
        </CardContent>
        <CardActions>
            <Button size='small'>Share</Button>
            <Button size='small'>Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  )
}

export default MuiCard
