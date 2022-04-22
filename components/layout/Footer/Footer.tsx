import React from "react";
import Link from "next/link";
import styled from 'styled-components';

import { Container } from '../Grid';

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

const Wrapper = styled.div`
  padding: 4rem 0;
`

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <h2>footer</h2>
      </Container>
    </Wrapper>
  );
};

export default Footer;
