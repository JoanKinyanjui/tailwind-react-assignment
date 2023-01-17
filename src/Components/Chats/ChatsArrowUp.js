import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { KeyboardArrowUp } from '@mui/icons-material';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import { users } from '../users';

export default function ChatsArrowUp() {
  const [state, setState] = React.useState({
    // top: false,
    // left: false,
    bottom: false,
    // right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
    className='h-48 w-48 '
    //   sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
       
      <List className='w- bg-green-300'>
        {users.map((user, index) => (
         <div className='flex justify-between'>
            <div>
            <ListItem key={user.id} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <img  src='/images/girl.jpg' className='w-20 h-20 rounded-full'/>
              </ListItemIcon>
              <ListItemText primary={user.name} />
            </ListItemButton>
          </ListItem>
          </div>
          <div>
            <div className='bg-green-400 rounded-full w-2 h-2'></div>
         </div>
         </div>
        
        ))}
      </List>
     
    </Box>
  );

  return (
    <div>
      {[ 'bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><div> <KeyboardArrowUp className='text-white' /></div></Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}