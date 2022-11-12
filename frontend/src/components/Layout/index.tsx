import React from 'react';
import Sidebar from '../Sidebar';

import { Wrapper, Main } from './styles';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Wrapper>
      <Sidebar />

      <Main>{children}</Main>
    </Wrapper>
  );
}
