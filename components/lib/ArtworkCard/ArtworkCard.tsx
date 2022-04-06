import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import slugify from "slugify";

import { Artwork } from "../../../types/artwork";

import styles from "./ArtworkCard.module.css";
import { getArtworkUrl } from "../../../lib/utils";

interface Props {
  artwork: Artwork;
}

const ArtworkCard = ({ artwork }: Props) => {
  // TODO - "thumbnail" img instead
  const coverImage = artwork.images[0];

  return (
    <div className={styles.artworkCard}>
      <Link href={getArtworkUrl(artwork)}>
        <a>
          <div className={styles.artworkCardImageWrapper}>
            <Image src={coverImage} layout="fill" />
          </div>
          <h3 className={styles.artworkCardTitle}>{artwork.meta?.title}</h3>
        </a>
      </Link>
    </div>
  );
};

export default ArtworkCard;
