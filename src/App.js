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
import OCDPage from './Pages/ocdPage';
import AnxietyPage from './Pages/anxietyPage';
import AdjustmentPage from './Pages/adjustmentPage';
import DepressionPage from './Pages/depressionPage';
import PersonalityPage from './Pages/personalityPage';
import IntellectualPage from './Pages/intellectualPage';





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/obsessive-cumpulsive-disorder' element={<OCDPage/>}/>
        <Route path='/anxiety-disorder' element={<AnxietyPage/>}/>
        <Route path='/adjustment-disorder' element={<AdjustmentPage/>}/>
        <Route path='/depression' element={<DepressionPage/>}/>
        <Route path='/personality-disorder' element={<PersonalityPage/>}/>
        <Route path='/intellectual-disability' element={<IntellectualPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
