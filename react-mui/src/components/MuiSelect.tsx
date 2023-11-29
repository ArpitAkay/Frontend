import { Box, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'

const MuiSelect = () => {
    const [countries, setCountries] = useState<string[]>([]);
    console.log(countries);
    const handleCountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      console.log(event.target.value)
      console.log(typeof value)
      setCountries(typeof value === 'string' ? value.split(',') : value);
    }

  return (
    <Box width="250px">
        <TextField label="Select Country" select value={countries} onChange={handleCountryChange} fullWidth size='small' SelectProps={{
          multiple: true,
        }} helperText="Please select your country">
            <MenuItem value="India">India</MenuItem>
            <MenuItem value="USA">USA</MenuItem>
            <MenuItem value="UK">UK</MenuItem>
        </TextField>
    </Box>
  )
}

export default MuiSelect
