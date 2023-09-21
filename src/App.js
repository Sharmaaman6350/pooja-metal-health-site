import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
  Outlet
} from "react-router-dom";
import "./styles.css";

import 'react-toastify/dist/ReactToastify.css';
import "react-datepicker/dist/react-datepicker.css";
import 'react-confirm-alert/src/react-confirm-alert.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import InnerPage from './Pages/InnerPage';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/innerpage/:id' element={<InnerPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
