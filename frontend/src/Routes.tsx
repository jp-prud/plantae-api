import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

export default function Routes() {
  return (
    <Switch>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Route>
    </Switch>
  );
}
