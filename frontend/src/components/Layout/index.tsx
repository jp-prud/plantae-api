import React from 'react';

import { Wrapper } from './styles';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Wrapper>{children}</Wrapper>;
}
