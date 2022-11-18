import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';

export default function Routes() {
  return (
    <Switch>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Route>
    </Switch>
  );
}
