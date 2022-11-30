import { Link } from 'react-router-dom';

import { Wrapper, LinksList } from './styles';

type ILink = {
  href: string;
  label: string;
};

export default function SideBar() {
  const linksMock: Array<ILink> = [
    { href: '/', label: 'Página Inicial' },
    { href: '/infos', label: 'Informações' },
  ];

  return (
    <Wrapper>
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
