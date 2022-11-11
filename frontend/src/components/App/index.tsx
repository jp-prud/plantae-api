import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../../Routes';
import Layout from '../Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
