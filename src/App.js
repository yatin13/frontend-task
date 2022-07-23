import React from 'react';
import Home from './Home';
import ItemDesc from './ItemDesc';
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/itemdesc" element={<ItemDesc/>}/>  
    </Routes>
    </>
  );
}

export default App;
