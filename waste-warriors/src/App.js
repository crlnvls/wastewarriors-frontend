import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './layout'
import {Home, Fridge, Login, Newsfeed, Recipes, Rewards} from './pages'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/Fridge' element={<Fridge />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Newsfeed' element={<Newsfeed />} />
        <Route path='/Recipes' element={<Recipes />} />
        <Route path='/Rewards' element={<Rewards />} />
        {/* <Route path='*' element={<NotFound />} /> */} */
      </Routes>
    </div>
  );
}

export default App;
