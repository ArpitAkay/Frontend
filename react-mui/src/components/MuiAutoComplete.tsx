import { Autocomplete, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'

type skill = {
    id: number
    label: string
}

const MuiAutoComplete = () => {
    const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React"];
    const [value, setValue] = useState<string | null>(null);

    const skillsOptions: skill[] = skills.map((skill, index) => {
        return {
            id: index,
            label: skill
        }
    })
    const [skill, setSkill] = useState<skill | null>(null);

    console.log(value);
    console.log(skill)

    const handleOnChange = (event: any, newValue: string | null) => {
        setValue(newValue);
    }

    const handleSkillOnChange = (event: any, newValue: skill | null) => {
        setSkill(newValue);
    }

  return (
    <Stack spacing={2} width={"250px"}>
      <Autocomplete options={skills} renderInput={(params) => <TextField {...params} label="skills"/>} value={value} onChange={handleOnChange} freeSolo/>
      <Autocomplete options={skillsOptions} renderInput={(params) => <TextField {...params} label="skills"/>} value={skill} onChange={handleSkillOnChange}/>
    </Stack>
  )
}

export default MuiAutoComplete
