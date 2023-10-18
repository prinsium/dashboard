import React from 'react';
import './Top.css';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Card, ListItem, Typography} from '@mui/material';
import {AiOutlineArrowDown, AiOutlineArrowUp} from 'react-icons/ai';
import dollor from '../assets/top/dollorsvg.svg';
import balance from '../assets/top/balancesvg.svg';
import note from '../assets/top/notes.svg';
import cart from '../assets/top/cart.svg';

const theme = createTheme({
  typography: {
    subtitle1: {
      fontSize: 12,
      color: '#5D7465',
    },
    body1: {
      fontWeight: 800,
    },
  },
});

const Top = () => {
  return (
    <div className='top-box'>
      <ThemeProvider theme={theme}>
        <Card className="card" style={{boxShadow: "none"}}>
            <div className='cardstack' >
              <ListItem>
            <img src={dollor} width={'80px'} />
            </ListItem>
            <ListItem>
            <div className='text-stack' >
            <Typography variant="subtitle1">Earning</Typography>
            <Typography>$198k</Typography>
            <Typography variant="subtitle1"><AiOutlineArrowUp />2% this month</Typography>
            </div>
            </ListItem>
            </div>
          </Card>

          <Card className="card" style={{boxShadow: "none"}}>
            <div className='cardstack' >
              <ListItem>
            <img src={note} width={'80px'} />
            </ListItem>
            <ListItem>
            <div className='text-stack' >
            <Typography variant="subtitle1">Orders</Typography>
            <Typography>$2.4k</Typography>
            <Typography variant="subtitle1"><AiOutlineArrowDown />2% this month</Typography>
            </div>
            </ListItem>
            </div>
          </Card>

          <Card className="card" style={{boxShadow: "none"}}>
            <div className='cardstack' >
              <ListItem>
            <img src={balance} width={'80px'} />
            </ListItem>
            <ListItem>
            <div className='text-stack' >
            <Typography variant="subtitle1">Balance</Typography>
            <Typography>$2.4k</Typography>
            <Typography variant="subtitle1"><AiOutlineArrowDown />2% this month</Typography>
            </div>
            </ListItem>
            </div>
          </Card>

          <Card className="card" style={{boxShadow: "none"}}>
            <div className='cardstack' >
              <ListItem>
            <img src={cart} width={'80px'} />
            </ListItem>
            <ListItem>
            <div className='text-stack' >
            <Typography variant="subtitle1">Total Sales</Typography>
            <Typography>$89k</Typography>
            <Typography variant="subtitle1"><AiOutlineArrowUp />3% this month</Typography>
            </div>
            </ListItem>
            </div>
          </Card>
          </ThemeProvider>
    </div>
  )
}

export default Top