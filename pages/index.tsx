import { getAllArtworks } from "../lib/resources/artworks";

import { Artwork } from "types/artwork";

import Layout from "components/lib/layout/Layout";
import ArtworkList from "components/lib/ArtworkList";

interface Props {
  artworks: Artwork[];
}

export default function HomePage({ artworks }: Props) {
  return (
    <Layout>
      <ArtworkList artworks={artworks} />
    </Layout>
  );
}

export async function getStaticProps() {
  const artworks = await getAllArtworks();

  const props = {
    artworks,
  };

  return { props };
}
