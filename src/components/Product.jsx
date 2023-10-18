import * as React from 'react';
import './Product.css';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box, Typography, ListItem, Card} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {BsChevronDown, BsSearch} from 'react-icons/bs';

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

const data = [
  { id: 1, 
    image: "https://www.pixground.com/wp-content/uploads/2023/06/Windows-11-Abstract-Blue-Background-4K-Desktop-Wallpaper-1024x576.webp", 
    title: 'Abstract 3D', 
    description: 'Lorem ipsum dolor sit amet', 
    stock: '32 in stcock', 
    price: '$45.99', 
    sells: '20' },
  { id: 2, 
    image: "https://www.pixground.com/wp-content/uploads/2023/06/Windows-11-Abstract-Blue-Background-4K-Desktop-Wallpaper-1024x576.webp", 
    title: 'Abstract 3D', 
    description: 'Lorem ipsum dolor sit amet', 
    stock: '32 in stcock', 
    price: '$45.99', 
    sells: '20' },
  { id: 3, 
    image: "https://www.pixground.com/wp-content/uploads/2023/06/Windows-11-Abstract-Blue-Background-4K-Desktop-Wallpaper-1024x576.webp", 
    title: 'Abstract 3D', 
    description: 'Lorem ipsum dolor sit amet', 
    stock: '32 in stcock', 
    price: '$45.99', 
    sells: '20' },
  { id: 4, 
    image: "https://www.pixground.com/wp-content/uploads/2023/06/Windows-11-Abstract-Blue-Background-4K-Desktop-Wallpaper-1024x576.webp", 
    title: 'Abstract 3D', 
    description: 'Lorem ipsum dolor sit amet', 
    stock: '32 in stcock', 
    price: '$45.99', 
    sells: '20' },
]

const Product = () => {
  return (
    <div className="product-box">
      <ThemeProvider theme={theme}>
    <TableContainer component={Card} style={{boxShadow: "none",}}>
      <div className="Product-head">
    <Typography className='product-left-box'>Product Sell</Typography>
         <div className='Product-head-right'>
      <Typography className='product-right-box' variant="subtitle1"><BsSearch/>&nbsp;&nbsp;search</Typography>
       <Typography className='product-right-box' variant="subtitle1">Last 30 days &nbsp;&nbsp;<BsChevronDown/></Typography>
         </div>
         </div>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <Box sx={{ justifyContent: 'space-between' }}>
        </Box>
        <TableHead>
          <TableRow>
            <TableCell>
            <Typography variant="subtitle1">Product Name</Typography>
            </TableCell>
            <TableCell align="right">
            <Typography variant="subtitle1">Stock</Typography>
            </TableCell>
            <TableCell align="right">
            <Typography variant="subtitle1">Price</Typography>
            </TableCell>
            <TableCell align="right">
            <Typography variant="subtitle1">Total sales</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow
              key={item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <div className='product-name-box' >
                
              <div className='product-image'>
              <img src={item.image} width={'60px'} height={'45px'} style={{borderRadius: '5px'}}/>
              </div>
              
              
              <div className='product-name-stack' >
              <Typography>{item.title}</Typography>
              <Typography variant="subtitle1">{item.description}</Typography>
              </div>
              
              </div>

              </TableCell>
              <TableCell align="right">{item.stock}</TableCell>
              <TableCell align="right">{item.price}</TableCell>
              <TableCell align="right">{item.sells}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </ThemeProvider>
    </div>
  );
}

export default Product;