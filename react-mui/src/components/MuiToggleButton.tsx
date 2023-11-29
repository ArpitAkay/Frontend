import { Stack, ToggleButton, ToggleButtonGroup } from '@mui/material'
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import React, { useState } from 'react'

const MuiToggleButton = () => {
    const [formats, setFormats] = useState<string[]>([]);
    console.log({formats});
    const handleFormatsChange = (event: React.MouseEvent<HTMLElement>, updatedFormats: string[]): void => {
        setFormats(updatedFormats);
    }

  return (
    <Stack direction={"row"}>
        <ToggleButtonGroup aria-label='text formatting' value={formats} onChange={handleFormatsChange} size='small' color='success' orientation='vertical' 
        // exclusive    toggle one option at a time
        >
            <ToggleButton value={"bold"} aria-label='bold'><FormatBoldIcon /></ToggleButton>
            <ToggleButton value={"italic"} aria-label='italic'><FormatItalicIcon /></ToggleButton>
            <ToggleButton value={"underlined"} aria-label='underlined'><FormatUnderlinedIcon /></ToggleButton>
        </ToggleButtonGroup>
    </Stack>
  )
}

export default MuiToggleButton
