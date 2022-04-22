import React, { ReactNode } from "react";
import Link from "next/link";
import styled from 'styled-components';

import { Container } from '../../layout/Grid';

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
  // {
  //   label: "store",
  //   href: "https://www.inprnt.com/gallery/sweaterparrot/",
  //   external: true,
  // },
];

const Wrapper = styled.div`
  padding: 1rem;
  `;

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
`

const LinkListItem = styled.li`
  display: inline-block;
  margin-right: 1rem;
`


const Navbar = () => {
  return (
    <Wrapper>
      <Container>
        <InnerWrapper>
          <Logo>
            <Link href="/">
              <a>sweaterparrot</a>
            </Link>
          </Logo>

          <LinkList>
            <ul>
              {links.map(({ href, label, external }) => (
                <LinkListItem key={label}>
                  {external ? (
                    <a href={href} target="_blank">
                      {label}
                    </a>
                  ) : (
                    <Link href={href}>
                      <a>{label}</a>
                    </Link>
                  )}
                </LinkListItem>
              ))}
            </ul>
          </LinkList>
        </InnerWrapper>
      </Container>
    </Wrapper>
  );
};

export default Navbar;
