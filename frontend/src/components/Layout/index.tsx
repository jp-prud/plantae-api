/* eslint-disable import/no-unresolved */
import React from 'react';
import Sidebar from '../SideBar';
import TopBar from '../TopBar';

import { Wrapper, Main } from './styles';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Wrapper>
      <Sidebar />

      <Main>
        <TopBar />
        {children}
      </Main>
    </Wrapper>
  );
}
