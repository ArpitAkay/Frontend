import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React from "react";

const MuiTabs = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    }

  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", width: '400px'}}>
          <TabList onChange={handleChange} aria-label="Tabs example" textColor="secondary" indicatorColor="secondary" centered variant="scrollable" scrollButtons='auto'>
            <Tab label="Tab One" value="1" icon={<FavoriteIcon />} iconPosition="start"/>
            <Tab label="Tab Two" value="2" icon={<FavoriteIcon />} iconPosition="start"/>
            <Tab label="Tab Three" value="3" icon={<FavoriteIcon />} iconPosition="start"/>
            <Tab label="Tab Four" value="4" icon={<FavoriteIcon />} iconPosition="start"/>
            <Tab label="Tab Five" value="5" icon={<FavoriteIcon />} iconPosition="start"/>
            <Tab label="Tab Six" value="6" icon={<FavoriteIcon />} iconPosition="start"/>
          </TabList>
        </Box>
        <TabPanel value="1">Tab One</TabPanel>
        <TabPanel value="2">Tab Two</TabPanel>
        <TabPanel value="3">Tab Three</TabPanel>
        <TabPanel value="4">Tab Four</TabPanel>
        <TabPanel value="5">Tab Five</TabPanel>
        <TabPanel value="6">Tab Six</TabPanel>
      </TabContext>
    </Box>
  );
};

export default MuiTabs;
