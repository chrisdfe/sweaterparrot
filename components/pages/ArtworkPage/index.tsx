import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import Image from "next/image";
import styled from 'styled-components';

import Layout from "../../lib/layout/Layout";
import { Container, Column } from "../../lib/layout/Grid";
import Box from "../../lib/layout/Box";

import { Artwork } from "../../../types/artwork";

import PrevNextBar from './PrevNextBar';

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

const ImageWrapper = styled.div`
  position: relative;
`;

export default function ArtworkDetailPage({ artwork }: Props) {
  return (
    <Layout>

      <Container>
        <Column>
          <Box margin={{ top: 1, bottom: 1 }}>
            <Link href="/">&laquo; back</Link>
          </Box>
        </Column>
      </Container>

      <TitleBar>
        <Container>
          <Column span={12}>

            <Box margin={{ top: 5, bottom: 5 }}>
              <TitleWrapper>
                <h1>
                  {artwork.title}
                </h1>
                <span>{artwork.year}</span>
              </TitleWrapper>
            </Box>

          </Column>
        </Container>
      </TitleBar>

      <Box margin={{ bottom: 3 }}>
        <Container>
          <Column span={12}>
            {artwork.images.map((image) => (
              <Box margin={{ bottom: 3 }} key={image}>
                <ImageWrapper>
                  <Image src={image} layout="responsive" width="1920" height="1920" />
                </ImageWrapper>
              </Box>
            ))}
          </Column>
        </Container>
      </Box>
    </Layout >
  );
}