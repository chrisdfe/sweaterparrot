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
      <Column span={12}>
        <Box margin={{ top: 1, bottom: 1 }}>
          <BackWrapper>
            <Link href="/">&laquo; back</Link>
          </BackWrapper>
        </Box>
      </Column>
    </Container>
  )
}