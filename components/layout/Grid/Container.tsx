import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode
}

const Wrapper = styled.div`
  max-width: 1920px;
  margin: 0 auto;
`;

function Container({ children }: Props) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}

export default Container;