import { Box, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from '@mui/material'
import React, { useState } from 'react'

const MuiRadioButton = () => {
    const [expierence, setExpierence] = useState<String>('')
    console.log(expierence);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setExpierence(event.target.value)
    }

  return (
    <Box>
      <FormControl error required>
        <FormLabel id='job-expierence-group-label'>Year of expierences</FormLabel>
        <RadioGroup name='job-expierence-group' aria-labelledby='job-expierence-group-label' value={expierence} row onChange={handleChange}>
            <FormControlLabel value='0-2' control={<Radio size='small' color='secondary'/>} label='0-2' />
            <FormControlLabel value='2-4' control={<Radio size='medium' />} label='2-4' />
            <FormControlLabel value='4-6' control={<Radio />} label='4-6' />
        </RadioGroup>
        <FormHelperText>Invalid Selection</FormHelperText>
      </FormControl>
    </Box>
  )
}

export default MuiRadioButton
