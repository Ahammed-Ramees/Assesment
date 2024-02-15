import logo from './logo.svg';
import './App.css';
import ViewData from './Components/ViewData';

import Appbar from './Components/Appbar';
import { Route,Routes } from 'react-router-dom';
import AddData from './Components/AddData';

function App() {
  return (
    <div className="App">
    
      <Appbar/>
      <Routes>
        <Route path='/' element={<ViewData/>}/>
        <Route path='/add' element={<AddData/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
