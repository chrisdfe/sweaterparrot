import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { COLUMN_SPAN, GUTTER } from './constants';

interface Props {
  children: ReactNode
}

const Wrapper = styled.div`
  max-width: 1200px;
  padding: 0;
  margin: 0 auto;
`;

const Inner = styled.div`
  /* margin: 0 -${GUTTER}; */
  display: flex;
  flex-wrap: wrap;
`;

function Container({ children }: Props) {
  return (
    <Wrapper>
      <Inner>
        {children}
      </Inner>
    </Wrapper>
  );
}

export default Container;