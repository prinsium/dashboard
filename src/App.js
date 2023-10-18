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
     <Overview />
     {/* <Customers /> */}
     <Product />
    </div>
  );
}

export default App;
