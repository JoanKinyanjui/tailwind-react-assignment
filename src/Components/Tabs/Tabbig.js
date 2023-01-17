import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Divider, Grid } from '@mui/material';
import "../Profile/Profile.css"
import ProfileDetails from '../ProfileDetails/ProfileDetails';
import Chats from '../Chats/Chats';
import Posts from '../Posts/Posts';
import Gallery from '../Gallery/Gallery';
import { TodayOutlined } from '@mui/icons-material';
import ToDo from '../ToDo/ToDo';
import { useLocation } from "react-router-dom";
import { users } from '../users';


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  
  }

  export default function Tabbig(props) {


// Find User...
const location = useLocation();
const id =location.state?.id;
console.log(id);
const object = users.find(obj => obj.id === id);
console.log(object.name)



const [value, setValue] = React.useState(0);
  
const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
        <>
       <div className=' hidden lg:grid tabs-menu bg-slate-300 place-content-center h-full'>
       <Tabs
       className="lowercase w-full h-full grid place-content-center"
          orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          TabIndicatorProps={{sx:{display:"none",color:"white",opacity:"1"}}}

          sx={{
            " & button":{borderRadius:0},
            " & button:hover":{color:"white"},
            " & button:active":{color:"white",border:"none"}
          }}
        >
          <Tab label="Profile" {...a11yProps(0)} sx={{borderBottom:"solid 1px #FFFFFF", width:"100%",fontSize:"24px",textTransform:"capitalize",color:"white",opacity:"0.5"}} />
          <Tab label="Posts" {...a11yProps(1)}  sx={{borderBottom:"solid 1px #FFFFFF", width:"100%",fontSize:"24px",textTransform:"capitalize",color:"white",opacity:"0.5"}}/>
          <Tab label="Gallery" {...a11yProps(2)}  sx={{borderBottom:"solid 1px #FFFFFF", width:"100%",fontSize:"24px",textTransform:"capitalize",color:"white",opacity:"0.5"}}/>
          <Tab label="To Do" {...a11yProps(3)}  sx={{borderBottom:"solid 1px #FFFFFF", width:"100%",fontSize:"24px",textTransform:"capitalize",color:"white",opacity:"0.5"}}/>
        </Tabs>
       </div >
{/* Individual tabs */}
       <div className='individual-tabs hidden lg:grid  '>
        <TabPanel value={value} index={0}  className="tab-panel-main "  >
          <ProfileDetails object={object} />
        </TabPanel>
        <TabPanel value={value} index={1} className="tab-panel-main  " >
          <Posts   object={object}/> 
        </TabPanel>
        <TabPanel value={value} index={2} className="tab-panel-main " >
          <Gallery  object={object}/>
        </TabPanel>
        <TabPanel value={value} index={3} className="tab-panel-main" >
          <ToDo  object={object} />
        </TabPanel>
        </div>
       </>
        )}