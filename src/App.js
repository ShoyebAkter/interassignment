import './App.css';
import Header from './components/Header/Header';
import { Routes } from 'react-router-dom';
import Shop from './components/Shop/Shop';



function App() {
  

  // <h1>SpaceX Launches</h1>
  // <ul>
  //   {data.currencies.map((launch) => (
  //     <li >{launch.label} -- {launch.symbol}</li>
  //   ))}
  // </ul>
  return (
    <div>
       <Header></Header>
       <Shop/>
    </div>
  );
}

export default App;
