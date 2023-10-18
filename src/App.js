import logo from './logo.svg';
import './App.css';
import Top from './components/Top';
import Overview from './components/Overview';
import Customers from './components/Customers';
import Product from './components/Product';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
     <Top />
     <div className='mid-section'>
     <div className='mid-section-left'>
     <Overview />
     </div>
     <div className='mid-section-right'>
     <Customers />
     </div>
     </div>
     <Product />
    </div>
  );
}

export default App;
