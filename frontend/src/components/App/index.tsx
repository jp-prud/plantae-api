import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../../Routes';
import Layout from '../Layout';

import GlobalStyles from '../../assets/styles/globalStyles';

function App() {
  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />

        <Layout>
          <Routes />
        </Layout>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
