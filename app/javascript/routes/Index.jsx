import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Recipes from '../components/Recipes';
import Recipe from '../components/Recipe';

export default (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/recipes' element={<Recipes />} />
      <Route path='/recipe/:id' element={<Recipe />} />
    </Routes>
  </BrowserRouter>
);
