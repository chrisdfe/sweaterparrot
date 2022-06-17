import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";

import { getAllArtworks, getArtworkBySlug } from "../../lib/resources/artworks";
import { getArtworkSlugFromTitle } from '../../lib/utils';

import { Artwork } from "../../types/artwork";

import ArtworkPage from '../../components/pages/ArtworkPage';

interface Props {
  artwork: Artwork;
}

export default function ArtworkDetailPage({ artwork }: Props) {
  return (
    <ArtworkPage artwork={artwork} />
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const artworks = await getAllArtworks();

  const paths = artworks.map((artwork) => {
    return { params: { slug: getArtworkSlugFromTitle(artwork.title) } };
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
