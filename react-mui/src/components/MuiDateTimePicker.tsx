
import { Stack } from '@mui/material'
import { DatePicker, DateTimePicker, TimePicker } from '@mui/x-date-pickers'
import React from 'react'

const MuiDateTimePicker = () => {
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = React.useState<Date | null>(null);
    const [selectedDateTime, setSelectedDateTime] = React.useState<Date | null>(null);
    console.log(selectedDate);
    console.log({selectedTime: selectedTime?.toLocaleTimeString()});
    console.log(selectedDateTime);
  return (
    <Stack spacing={4} sx={{width: '250px'}}>
        <DatePicker label='Date Picker' value={selectedDate} onChange={(newValue) => setSelectedDate(newValue)}/>
        <TimePicker label='Time Picker' value={selectedTime} onChange={(newValue) => setSelectedTime(newValue)}/>
        <DateTimePicker label='Date Time Picker' value={selectedDateTime} onChange={(newValue) => setSelectedDateTime(newValue)}/>
    </Stack>
  )
}

export default MuiDateTimePicker
