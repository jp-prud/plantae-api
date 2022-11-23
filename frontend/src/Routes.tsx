import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Infos from './pages/Infos';
import Product from './pages/Product';
import ProductiveLocale from './pages/ProductiveLocale';
import QualitySeal from './pages/QualitySeal';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

export default function Routes() {
  return (
    <Switch>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="info" element={<Infos />} />

        <Route path="product" element={<Product />} />
        <Route path="productive-locale" element={<ProductiveLocale />} />
        <Route path="quality-seal" element={<QualitySeal />} />

        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
      </Route>
    </Switch>
  );
}
