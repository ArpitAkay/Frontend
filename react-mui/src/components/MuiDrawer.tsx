import { Box, Drawer, IconButton, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React from "react";

const MuiDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState<boolean>(false);

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => setIsDrawerOpen(true)}
      ><MenuIcon /></IconButton>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={2} width={"250px"} textAlign={"center"} role="presentation">
          <Typography variant="h6">Menu</Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default MuiDrawer;
