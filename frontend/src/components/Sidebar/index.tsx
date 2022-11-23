import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { Wrapper, LinksList } from './styles';

type ILink = {
  href: string;
  label: string;
};

export default function SideBar() {
  const linksMock: Array<ILink> = [
    { href: '/', label: 'Página Inicial' },
    { href: '/info', label: 'Informações' },
  ];

  const [sideBarIsOpen, setSideBarIsOpen] = useState<boolean>(false);

  const handleHoverOpenSideBar = useCallback(() => {
    setSideBarIsOpen((prevState: boolean) => !prevState);
  }, []);

  return (
    <Wrapper
      isOpen={sideBarIsOpen}
      onMouseEnter={handleHoverOpenSideBar}
      onMouseLeave={handleHoverOpenSideBar}
    >
      <LinksList>
        {linksMock.map(link => (
          <Link to={link.href}>
            <span>{link.label}</span>
          </Link>
        ))}
      </LinksList>
    </Wrapper>
  );
}
