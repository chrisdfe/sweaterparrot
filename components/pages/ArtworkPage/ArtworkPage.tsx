import React from "react";
import Link from "next/link";
import styled from 'styled-components';

import Layout from "../../lib/layout/Layout";
import { Container, Column } from "../../lib/layout/Grid";
import Box from "../../lib/layout/Box";

import {
  Artwork
} from "../../../types/artwork";

import ArtworkBlockSection from './ArtworkBlockSection';

interface Props {
  artwork: Artwork;
}

const TitleBar = styled.div`
  /* position: sticky;
  top: 0; */
`

const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-end;

  h1 {
    margin: 0;
  }

  span {
    margin-bottom: 4px;
    margin-left: 1rem;
  }
`;

export default function ArtworkDetailPage({ artwork }: Props) {
  return (
    <Layout>

      <Container>
        <Column>
          <Box margin={{ top: 1, bottom: 1 }}>
          </Box>
        </Column>
      </Container>

      <TitleBar>
        <Container>
          <Column span={12}>

            <Box margin={{ top: 5, bottom: 5 }}>
              <Link href="/">&laquo; back</Link>
              <Box margin={{ top: 1 }}>
                <TitleWrapper>
                  <h1>
                    {artwork.title}
                  </h1>
                  <span>{artwork.year}</span>
                </TitleWrapper>
              </Box>
            </Box>

          </Column>
        </Container>
      </TitleBar>

      <Box margin={{ bottom: 3 }}>
        <Container>
          <Column span={12}>
            {artwork.blocks.map((block, index) => (
              <ArtworkBlockSection block={block} key={block.type + index} />
            ))}
          </Column>
        </Container>
      </Box>
    </Layout >
  );
}