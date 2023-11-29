import { Button, IconButton, Stack } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import React from "react";

const MuiButton = () => {
  return (
    <Stack spacing={2}>
      <Stack spacing={2} direction={"row"}>
        <Button variant="text" href="https://google.com">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>

      <Stack spacing={2} direction={"row"}>
        <Button variant="contained" color="primary" disableElevation>primary</Button>
        <Button variant="contained" color="secondary" disableRipple>secondary</Button>
        <Button variant="contained" color="error" onClick={() => alert("Error")}>error</Button>
        <Button variant="contained" color="warning">warning</Button>
        <Button variant="contained" color="info">info</Button>
        <Button variant="contained" color="success">success</Button>
      </Stack>

      <Stack spacing={2} direction={"row"}>
        <Button variant="text" color="primary" sx={{px: 2}}>primary</Button>
        <Button variant="text" color="secondary" sx={{px: 2}}>secondary</Button>
        <Button variant="text" color="error" sx={{px: 2}}>error</Button>
        <Button variant="text" color="warning" sx={{px: 2}}>warning</Button>
        <Button variant="text" color="info" sx={{px: 2}}>info</Button>
        <Button variant="text" color="success" sx={{px: 2}}>success</Button>
      </Stack>

      <Stack spacing={2} direction={"row"}>
        <Button variant="outlined" color="primary">primary</Button>
        <Button variant="outlined" color="secondary">secondary</Button>
        <Button variant="outlined" color="error">error</Button>
        <Button variant="outlined" color="warning">warning</Button>
        <Button variant="outlined" color="info">info</Button>
        <Button variant="outlined" color="success">success</Button>
      </Stack>

      <Stack display={"block"} spacing={2} direction={"row"}>
        <Button variant="outlined" color="primary" size="small">small</Button>
        <Button variant="outlined" color="secondary" size="medium">medium</Button>
        <Button variant="outlined" color="error" size="large">large</Button>
      </Stack>

      <Stack spacing={2} direction={"row"}>
        <Button variant="contained" startIcon={<SendIcon />}>Send</Button>
        <Button variant="contained" endIcon={<SendIcon />}>Send</Button>
        <IconButton aria-label={"send"} color="success" size="small"><SendIcon /></IconButton>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
