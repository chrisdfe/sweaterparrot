import React from "react";

import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import Image from "next/image";

import { getAllArtworks, getArtworkBySlug } from "../api/artworks";

import Layout from "../../components/layout/Layout";

import { Artwork } from "../../types/artwork";

interface Props {
  artwork: Artwork;
}

export default function ArtworkDetailPage({ artwork }: Props) {
  console.log("artwork.images", artwork.images);
  return (
    <Layout>
      <>
        <div style={{ padding: "1rem" }}>
          <Link href="/">&laquo; back</Link>
        </div>

        <div style={{ padding: "1rem" }}>
          <h1>{artwork.meta.title}</h1>
        </div>

        <div>
          {artwork.images.map((image) => (
            <div key={image} style={{ position: "relative", padding: "1rem" }}>
              <Image src={image} width={900} height={900} layout="responsive" />
            </div>
          ))}
        </div>
      </>
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
