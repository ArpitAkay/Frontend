import { Box } from '@mui/material'
import { DateRange, DateRangePicker } from '@mui/x-date-pickers-pro';
import React from 'react'

const MuiDateRangePicker = () => {
    const [value, setValue] = React.useState<DateRange<Date>>([null, null]);
    console.log(value);
  return (
    <Box width='500px'>
        <DateRangePicker localeText={{ start: 'Check-in', end: 'Check-out' }} value={value} onChange={(newValue) => setValue(newValue)}/>
    </Box>
  )
}

export default MuiDateRangePicker
