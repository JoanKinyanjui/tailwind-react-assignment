import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Divider, Grid } from '@mui/material';
import "./Profile.css"
import ProfileDetails from '../ProfileDetails/ProfileDetails';
import Chats from '../Chats/Chats';
import Posts from '../Posts/Posts';
import Gallery from '../Gallery/Gallery';
import { TodayOutlined } from '@mui/icons-material';
import ToDo from '../ToDo/ToDo';
import { useLocation } from "react-router-dom";
import { users } from '../users';
import Tabbig from '../Tabs/Tabbig';
import TabSmall from '../Tabs/Tabsmall';




export default function Profile(props) {

// Find User...
const location = useLocation();
const id =location.state?.id;
console.log(id);
const object = users.find(obj => obj.id === id);
console.log(object.name)


    return (

<div>
<div className='relative   place-items-center h-screen '>
<div className="h-screen w-full block lg:flex  lg:place-items-center place-content-start main-profile-div"> 
<Tabbig  className="Tabbig h-screen"/>
<TabSmall className=" Tabsmall " />
</div>

<div className='chats-main-div grid self-end  py-1  text-slate-100'  >
  <Chats />


</div>
</div>
</div>
    );
  }
