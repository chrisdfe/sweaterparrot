import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import Image from "next/image";
import styled from 'styled-components';

import theme from '../../lib/theme/theme';

import { getAllArtworks, getArtworkBySlug } from "../api/artworks";

import Layout from "../../components/layout/Layout";
import { Container } from "../../components/layout/Grid";

import { Artwork } from "../../types/artwork";

interface Props {
  artwork: Artwork;
}
const BackWrapper = styled.div`
  padding: 1rem 0;
`;

const TitleWrapper = styled.div`
  padding: 1rem 0;
`;

const ImageWrapper = styled.div`
  img {
    max-height: 100vh;
  }
`;

export default function ArtworkDetailPage({ artwork }: Props) {
  return (
    <Layout>
      <Container>
        <BackWrapper>
          <Link href="/">&laquo; back</Link>
        </BackWrapper>

        <TitleWrapper>
          <h1>{artwork.meta.title}</h1>
        </TitleWrapper>
      </Container>

      <Container>
        {artwork.images.map((image) => (
          <ImageWrapper key={image}>
            <Image src={image} width={1920} height={1920} layout="responsive" />
          </ImageWrapper>
        ))}
      </Container>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const artworks = await getAllArtworks();

  const paths = artworks.map((artwork) => {
    return { params: { slug: artwork.meta.slug || "" } };
  });

  return {
    paths,
    // fallback: true, false, or 'blocking' // See the "fallback" section below
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug;
  let artwork = null;

  if (Array.isArray(slug)) {
    artwork = await getArtworkBySlug(slug[0]);
  } else if (!!slug) {
    artwork = await getArtworkBySlug(slug);
  }

  const props = {
    artwork,
  };

  return { props };
};
