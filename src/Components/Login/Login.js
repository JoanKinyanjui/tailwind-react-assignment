import { Container} from '@mui/system';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Divider from '@mui/material/Divider';
import {users} from '../users';
import { TabScrollButton, Typography } from '@mui/material';

import React from 'react';
import "./Login.css"
import { Link } from 'react-router-dom';

function Login() {
  return (
<div className='login-main'>
  
      
  <div className='login-container'>
      <div className='login-container-one  grid place-content-center' >
        <p className='text-2xl text-zinc-600' >Select an account</p>
      </div>
      <Container className='login-container-two' >
       <List
      sx={{
        width: '100%',
        bgcolor: 'background.paper',
      }}
    >
   {users.map((user)=>(
       <Link to={`profile/${user.id}`} state={{id:user.id}}>
        <ListItem className='border-b border-gray-300 text-lg'>
       <ListItemAvatar>
         <Avatar>
           <img src={user.profilepicture} className='w-10 h-11' />
         </Avatar>
       </ListItemAvatar>
       <ListItemText
        disableTypography
        secondary={<Typography  style={{color:"#4A4A4A", fontSize:"20px" }}>{user.name}</Typography>}
      />

     </ListItem>
       </Link>
   ))}
      
     
    </List>

      </Container>
    </div>

</div>
  )
}

export default Login;