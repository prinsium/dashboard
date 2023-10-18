import React, { useState } from 'react';
import './Navbar.css';

import { Typography, Card, Drawer, List, ListItem, Avatar, IconButton, ListItemIcon, ListItemButton, CardHeader } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FiMenu } from 'react-icons/fi';
import { CiSearch } from 'react-icons/ci';
import {MdExpandMore} from 'react-icons/md';


const data = [
    {
        id: 1,
        path: "M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z",
        title: 'Dashboard'
    },
    {
        id: 2,
        path: "M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3",
        title: 'Product'
    },
    {
        id: 3,
        path: "M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z",
        title: 'Customers'
    },
    {
        id: 4,
        path: "M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
        title: 'Income'
    },
    {
        id: 5,
        path: "M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495",
        title: 'Promote'
    },
    {
        id: 6,
        path: "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" ,
        title: 'Help'
    },
]

const theme = createTheme({
  typography: {
    subtitle1: {
      fontSize: 12,
      color: '#5D7465',
    },
    subtitle2: {
        fontSize: 16,
        color: '#f2f2f2',
      },
      subtitle2: {
        fontSize: 12,
        color: '#f2f2f2',
      },
    body1: {
      fontWeight: 650,
    },
    heading1: {
        fontSize: 24,
        fontWeight: 550,
        color: '#f2f2f2',
      },
  },
});

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const handleListItemClick = (event, itemIndex) => {
    setSelectedItem(itemIndex);
  };

  return (
    <div className='Navbar'>
      <ThemeProvider theme={theme}>
        <Typography><FiMenu onClick={toggleDrawer(true)} />&nbsp;&nbsp; Hello Shahrukh, <span>&#128075;</span></Typography>
        <Drawer open={isDrawerOpen} onClose={toggleDrawer(false)} style={{ width: '40%' }}>
          <div style={{ backgroundColor: '#350aa2', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <List>
            <ListItem>
                <ListItemIcon>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="32px" color='#f2f2f2' height="32px" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
            </svg>
            </ListItemIcon>
            <Typography variant="heading1">
              Dashboard
            </Typography>
            </ListItem>
            </List>
          

          
            <List>
            {data.map((item) => (
              <ListItem key={item.id}>
              
              <ListItemButton 
          selected={selectedItem === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
            <ListItemIcon>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="24px" color='#f2f2f2' height="24px" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d={item.path} />
            </svg>
          </ListItemIcon>
          <Typography variant='subtitle2'>{item.title} </Typography>
            </ListItemButton>
              
            </ListItem>
            ))}
            </List>
          </div>
          <div className='bottom-heading' style={{backgroundColor: '#350aa2',alignContent: 'flex-end', justifyContent: 'center'}}>
            <Card sx={{ maxWidth: 345, boxShadow: 'none', backgroundColor: '#350aa2', marginBottom: '1rem' }}>
                <CardHeader  sx={{color: '#f2f2f2'}}
                    avatar={
                        <Avatar aria-label="recipe">
                            <img src="https://freerangestock.com/sample/66142/photo.jpg" alt="avatar" width="70px" />
                        </Avatar>
                        }
                    action={
                        <IconButton aria-label="settings">
                        <MdExpandMore style={{color: '#f2f2f2'}}/>
                        </IconButton>
                    }
                    title="Evano"
                    subheader={<Typography variant='subtitle3'>Project Manager</Typography>}
                 />
            </Card>
            </div>
        </Drawer>
        <Card
          style={{
            boxShadow: 'none',
            padding: '5px',
            marginBottom: '10px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <CiSearch size={'14px'} />
            <Typography variant="subtitle1">&nbsp;&nbsp;search</Typography>
          </div>
        </Card>
      </ThemeProvider>
    </div>
  );
};

export default Navbar;
