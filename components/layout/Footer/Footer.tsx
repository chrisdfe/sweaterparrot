import React from "react";
import Link from "next/link";
import styled from 'styled-components';

import { Container, Column } from '../Grid';
import Box from '../Box';

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
    <Box margin={{ top: 3, bottom: 3 }}>
      <Container>
        <Column>
          footer
        </Column>
      </Container>
    </Box>
  );
};

export default Footer;
