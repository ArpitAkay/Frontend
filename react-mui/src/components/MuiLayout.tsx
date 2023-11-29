import { Box, Divider, Grid, Paper, Stack } from "@mui/material";
import React from "react";

const MuiLayout = () => {
  return (
    <Paper
    elevation={5}
    sx={{
      padding: "32px",
    }}
    >
      <Stack
        sx={{
          border: "1px solid black",
        }}
        direction={"row"}
        spacing={2} // spacing multiple by 8px
        divider={<Divider orientation={"vertical"} flexItem />}
      >
        <Box
          // component={"span"}
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            height: "100px",
            width: "100px",
            padding: "16px",
            "&:hover": {
              backgroundColor: "primary.light",
              color: "black",
            },
          }}
        >
          Lorem, ipsum.
        </Box>

        <Box
          display={"flex"}
          height={"100px"}
          width={"100px"}
          bgcolor={"success.light"}
          p={2} // padding mutliple by 8px
        ></Box>
      </Stack>
      <Grid container mt={2} 
      // spacing={2}
      rowSpacing={1}
      columnSpacing={2}
      >
        <Grid item xs={12} sm={6} >
          <Box bgcolor={"primary.light"} p={2}>
            item1
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor={"primary.light"} p={2}>
            item2
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor={"primary.light"} p={2}>
            item3
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor={"primary.light"} p={2}>
            item1
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MuiLayout;
