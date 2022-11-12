import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../../Routes';
import Layout from '../Layout';

import GlobalStyles from '../../assets/styles/globalStyles';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />

      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
