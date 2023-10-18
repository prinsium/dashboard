import React, { useState } from 'react';
import './Overview.css';

import { Typography, Card } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {BsChevronDown} from 'react-icons/bs';

const data = [
  { id: 1, month: 'JAN',
  height: Math.floor(Math.random() * 100) + 1 },
  { id: 2, month: 'FEB', 
  height: Math.floor(Math.random() * 100) + 1 },
  { id: 3, month: 'MAR', 
  height: Math.floor(Math.random() * 100) + 1 },
  { id: 4, month: 'APR', 
  height: Math.floor(Math.random() * 100) + 1 },
  { id: 5, month: 'MAY', 
  height: Math.floor(Math.random() * 100) + 1 },
  { id: 6, month: 'JUN', 
  height: Math.floor(Math.random() * 100) + 1 },
  { id: 7, month: 'JUL', 
  height: Math.floor(Math.random() * 100) + 1 },
  { id: 8, month: 'AUG', 
  height: Math.floor(Math.random() * 100) + 1 },
  { id: 9, month: 'SEP', 
  height: Math.floor(Math.random() * 100) + 1 },
  { id: 10, month: 'OCT', 
  height: Math.floor(Math.random() * 100) + 1 },
  { id: 11, month: 'NOV', 
  height: Math.floor(Math.random() * 100) + 1 },
  { id: 12, month: 'DEC', 
  height: Math.floor(Math.random() * 100) + 1 },
];

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

const Overview = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (id) => {
    setSelectedCard(id);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
      <Card className="overview-card" style={{boxShadow: "none",}}>

      <div className="overview-head">
        <div className="overview-head-left">
        <Typography>Overview</Typography>
        <Typography variant="subtitle1">Monthly Earning</Typography>
        </div>
        <div className="overview-head-right">
        <Typography variant="subtitle1">Quarterly &nbsp;&nbsp;<BsChevronDown/></Typography>
        </div>
        </div>

      <div className='overview-data'>

      {data.map((item) => (
              <div
                className={`data-box ${selectedCard === item.id ? 'selected' : ''}`}
                key={item.id}
                onClick={() => handleCardClick(item.id)}
              >
                <Card
                  style={{
                    boxShadow: "none",
                    width: '40px',
                    height: `${item.height}px`,
                    backgroundColor: selectedCard === item.id ? 'blue' : '#d2d1d1',
                    color: selectedCard === item.id ? '#fff' : '#f0f0f0',
                    position: 'absolute',
                    bottom: '0',
                  }}
                ></Card>
                <Typography variant="subtitle1">{item.month}</Typography>
              </div>
            ))}
      </div>

      </Card>
      </ThemeProvider>
    </div>
  )
}

export default Overview