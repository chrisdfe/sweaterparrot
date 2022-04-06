import React, { ReactNode } from "react";
import Image from "next/image";

import { Artwork } from "../../../types/artwork";

import ArtworkCard from "../ArtworkCard";

import styles from "./ArtworkList.module.css";

interface Props {
  artworks: Artwork[];
}

const ArtworkList = ({ artworks }: Props) => {
  return (
    <div className={styles.ArtworkList}>
      {artworks.map((artwork, index) => (
        <div
          key={artwork.meta?.title + " " + index}
          className={styles.ArtworkListItem}
        >
          <ArtworkCard artwork={artwork} />
        </div>
      ))}
    </div>
  );
};

export default ArtworkList;
