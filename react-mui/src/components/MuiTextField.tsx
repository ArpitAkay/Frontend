import { IconButton, InputAdornment, Stack, TextField } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import React, { useState } from 'react'

const MuiTextField = () => {

    const [value, setValue] = useState<String>("");

    const handleShowPassword = () => {
        const passwordElem = document.getElementById("password");
        const type = passwordElem?.getAttribute("type");
        if (type === "text") passwordElem?.setAttribute("type", "password");
        else passwordElem?.setAttribute("type", "text");
    }

  return (
    <Stack spacing={4}>
        <Stack spacing={2} direction={"row"}>
            <TextField variant={"outlined"} label={"outlined"} />
            <TextField variant={"filled"} label={"filled"} />
            <TextField variant={"standard"} label={"standard"} />
        </Stack>

        <Stack spacing={2} direction={"row"}>
            <TextField variant={"outlined"} label={"outlined"} size={"small"} color={"secondary"}/>
        </Stack>

        <Stack spacing={2} direction={"row"}>
            <TextField variant={"outlined"} label={"Form Input"} value={value} onChange={e => setValue(e.target.value)} required error={!value} helperText={!value ? "Required" : "Don't share your password"}/>
            <TextField type="password" disabled variant={"outlined"} label={"Form Input"} helperText={"Do not share your password"} />
            <TextField label={"Read only"} InputProps={{readOnly: true}}/>
        </Stack>

        <Stack spacing={2} direction={"row"}>
            <TextField label="Amount" InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>
            }}></TextField>
            <TextField label="Weight" InputProps={{
                endAdornment: <InputAdornment position='end'>Kg</InputAdornment>
            }}></TextField>
            <TextField type='password' id="password" label="Password" helperText={"Do not share your password"} required
            InputProps={{
                endAdornment: <InputAdornment position='end'><IconButton aria-label='VisibilityIcon' onClick={handleShowPassword}><VisibilityIcon /></IconButton></InputAdornment>
            }}
            ></TextField>
        </Stack>
    </Stack>
  )
}

export default MuiTextField
