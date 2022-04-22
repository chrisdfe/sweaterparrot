import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode
}

const Wrapper = styled.div``;

function Column({ children }: Props) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}

export default Column;