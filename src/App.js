import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignUp from './components/SignUp'; 
import Homepage from './components/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import DarkVariantExample from './components/DarkVariantExample';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/add' element={<h1> About Us</h1>} />
          <Route path='/update' element={<h1>update component</h1>} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path="/team" element={<DarkVariantExample />}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
