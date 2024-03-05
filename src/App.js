import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Privacy_policy from "./pages/Privacy_policy";
import Terms_conditions from "./pages/Terms_conditions";
import Cancellation_policy from "./pages/Cancellation_policy";
import ScrollToTop from '../src/ScrollToTop'



function App() {
  return (
    <BrowserRouter>
     <Routes>
     <Route path="/" element={<Home/>}/>
      <Route path="/privacy_policy" element={<Privacy_policy/>}/>
      <Route path="/terms_conditions" element={<Terms_conditions/>}/>
      <Route path="/cancellation_policy" element={<Cancellation_policy/>}/>
    </Routes>
    <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
