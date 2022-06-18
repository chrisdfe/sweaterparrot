import React, { ReactNode } from "react";
import Link from "next/link";
import styled from 'styled-components';

import { Container, Column } from '../../layout/Grid';
import Box from '../../layout/Box';

type NavbarLink = {
  label: string;
  href: string;
  external?: boolean;
};

const links: NavbarLink[] = [
  {
    label: "about",
    href: "/about",
  },
];


const InnerWrapper = styled.div`
  display: flex;
`

const Logo = styled.div`
  margin-right: 3rem;
`

const LinkList = styled.div`
  margin-left: auto;
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: inline-block;
    margin-right: 1rem;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const Navbar = () => {
  return (
    <Box margin={{ top: 1, bottom: 1 }}>
      <Container>
        <Column span={12}>
          <InnerWrapper>
            <Logo>
              <Link href="/">
                <a>sweaterparrot</a>
              </Link>
            </Logo>

            <LinkList>
              <ul>
                {links.map(({ href, label, external }) => (
                  <li key={label}>
                    {external ? (
                      <a href={href} target="_blank">
                        {label}
                      </a>
                    ) : (
                      <Link href={href}>
                        <a>{label}</a>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </LinkList>
          </InnerWrapper>
        </Column>
      </Container>
    </Box>
  );
};

export default Navbar;
