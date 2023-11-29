import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel } from '@mui/material'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import React, { useState } from 'react'

const MuiCheckbox = () => {
    const [checked, setChecked] = useState<boolean>(false);
    const [skills, setSkills] = useState<string[]>([]);

    console.log(skills);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked)
    }

    const handleSkillsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.checked){
            setSkills([...skills, event.target.value])
        } else {
            setSkills(skills.filter(skill => skill !== event.target.value))
        }
    }

  return (
    <Box>
        <Box>
            <FormControlLabel label="I accepts terms and conditions" control={<Checkbox checked={checked} onChange={handleChange} required/>}></FormControlLabel>
        </Box>

        <Box>
            <FormControlLabel label="I accepts terms and conditions" control={<Checkbox icon={<BookmarkIcon />} checkedIcon={<BookmarkBorderIcon />} checked={checked} onChange={handleChange} required/>}></FormControlLabel>
        </Box>

        <Box>
            <FormControl error required>
                <FormLabel>Skills</FormLabel>
                <FormGroup row>
                    <FormControlLabel label="HTML" control={<Checkbox value="HTML" checked={skills.includes("HTML")} onChange={handleSkillsChange}/>}></FormControlLabel>
                    <FormControlLabel label="CSS" control={<Checkbox value="CSS" checked={skills.includes("CSS")} onChange={handleSkillsChange} />}></FormControlLabel>
                    <FormControlLabel label="Javascript" control={<Checkbox  value="Javascript" checked={skills.includes("Javascript")} onChange={handleSkillsChange} />}></FormControlLabel>
                </FormGroup>
                <FormHelperText>You can pick multiple skills</FormHelperText>
            </FormControl>
        </Box>
    </Box>
  )
}

export default MuiCheckbox
