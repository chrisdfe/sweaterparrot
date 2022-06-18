import Link from "next/link";
import styled from 'styled-components';

import { Container, Column } from "../../layout/Grid";
import Box from "../../layout/Box";

const BackWrapper = styled.div`
  /* padding: 1rem 0; */
`;

export default function PrevNextBar() {
  return (
    <Container>
      <Column>
        <Box margin={{ top: 1, bottom: 1 }}>
          <Link href="/">&laquo; back</Link>
        </Box>
      </Column>
    </Container>
  )
}