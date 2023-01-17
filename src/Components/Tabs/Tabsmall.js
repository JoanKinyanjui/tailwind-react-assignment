import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProfileDetails from '../ProfileDetails/ProfileDetails';
import Posts from '../Posts/Posts';
import Gallery from '../Gallery/Gallery';
import ToDo from '../ToDo/ToDo';
import { useLocation } from "react-router-dom";
import { users } from '../users';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function TabSmall() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  // Find User...
const location = useLocation();
const id =location.state?.id;
console.log(id);
const object = users.find(obj => obj.id === id);
console.log(object.name)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className='grid lg:hidden'>
    <div className='tabs-menu  grid '>
    {/* <AppBar position="static" className='w-screen'> */}
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Profile" {...a11yProps(0)} sx={{ width:"100%",fontSize:"24px",textTransform:"capitalize",color:"white",opacity:"0.5"}} />
          <Tab label="Posts" {...a11yProps(1)}  sx={{ width:"100%",fontSize:"24px",textTransform:"capitalize",color:"white",opacity:"0.5"}}/>
          <Tab label="Gallery" {...a11yProps(2)}  sx={{ width:"100%",fontSize:"24px",textTransform:"capitalize",color:"white",opacity:"0.5"}}/>
          <Tab label="To Do" {...a11yProps(3)}  sx={{ width:"100%",fontSize:"24px",textTransform:"capitalize",color:"white",opacity:"0.5"}}/>
        </Tabs>
        {/* </AppBar> */}

        </div>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
         <div className='individual-tabs '>
        <TabPanel value={value} index={0}  className="tab-panel-main "  >
          <ProfileDetails object={object} />
        </TabPanel>
        <TabPanel value={value} index={1} className="tab-panel-main  " >
          <Posts  object={object}/> 
        </TabPanel>
        <TabPanel value={value} index={2} className="tab-panel-main " >
          <Gallery  object={object}/>
        </TabPanel>
        <TabPanel value={value} index={3} className="tab-panel-main" >
          <ToDo  object={object} />
        </TabPanel>
        </div>
      </SwipeableViews>
    </div>
  );
}