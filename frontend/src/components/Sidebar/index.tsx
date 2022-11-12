import React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper, LinksList } from './styles';

export default function Sidebar() {
  const linksMock = [
    { href: '/', label: 'Home' },
    { href: '/', label: 'Home' },
  ];

  return (
    <Wrapper>
      <LinksList>
        {linksMock.map(link => (
          <Link to={link.href}>{link.label}</Link>
        ))}
      </LinksList>
    </Wrapper>
  );
}
