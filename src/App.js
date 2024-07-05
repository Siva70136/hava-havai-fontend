import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Airport from './components/Airport';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/airport/:name' element={<Airport />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
