import React from "react";
import Card from "./Card";
import Home from "./pages/Home";
import Playlist from "./pages/Playlist";
import Play from "./pages/Play";
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import './App.css';
import * as ROUTES from "./constants/routes";






function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} /> {/* Default Route */}
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.PLAYLIST} element={<Playlist />} />
        <Route path={ROUTES.CARDS} element={<Card />} />
        <Route path = {ROUTES.PLAY} element={<Play />} />

      </Routes>
    </Router>
    
   
      
      
     
    
  );
}

export default App;
