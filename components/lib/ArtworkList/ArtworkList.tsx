import React, { ReactNode } from "react";
import Image from "next/image";

import { Artwork } from "../../../types/artwork";
import ArtworkCard from "../ArtworkCard";
import { Container, Column } from '../../layout/Grid';

interface Props {
  artworks: Artwork[];
}

const ArtworkList = ({ artworks }: Props) => {
  return (
    <Container>
      {artworks.map((artwork, index) => (
        <Column span={4} key={artwork.title}>
          <ArtworkCard artwork={artwork} key={artwork.title + " " + index} />
        </Column>
      ))}
    </Container>
  );
};

export default ArtworkList;
