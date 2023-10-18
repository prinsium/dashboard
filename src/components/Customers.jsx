import React from 'react';
import './Customers.css';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Card, Typography} from '@mui/material';

const theme = createTheme({
  typography: {
    subtitle1: {
      fontSize: 12,
      color: '#5D7465',
    },
    body1: {
      fontWeight: 650,
    },
  },
});

const Customers = () => {
  return (
    <div>
    <ThemeProvider theme={theme}>
    <Card className="customer-card" style={{boxShadow: "none", minWidth: 380}}>
    <div className="customer-head">
    <Typography>Customers</Typography>
    <Typography variant="subtitle1">Customers that buy products</Typography>
    </div>
    <div className='customer-box'>
    <div className="circle-outer"></div>
    <div className="circle-mid"></div>
    <div className="circle-inner"></div>
    <div className='customer-text'>
    <Typography>65%</Typography>
    <Typography variant="subtitle1">Total New Customers</Typography>
    </div>
    </div>
    </Card>
    </ThemeProvider>
    </div>
  )
}

export default Customers