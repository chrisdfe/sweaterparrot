import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import styled from 'styled-components';

import slugify from "slugify";

import Box from '../../layout/Box';
import { Artwork } from "../../../types/artwork";

import { getArtworkUrl } from "../../../lib/utils";

import * as Styles from './ArtworkCard.styles';

interface Props {
  artwork: Artwork;
}

const ArtworkCard = ({ artwork }: Props) => {
  // TODO - "thumbnail" img instead
  const coverImage = artwork.images[0];

  return (
    <Box margin={{ bottom: 3 }}>
      <Styles.CardWrapper>
        <Link href={getArtworkUrl(artwork)}>
          <a>
            <Styles.ImageWrapper>
              <Image src={coverImage} layout="fill" />
            </Styles.ImageWrapper>
            <Styles.Title>{artwork.title}</Styles.Title>
          </a>
        </Link>
      </Styles.CardWrapper>
    </Box>
  );
};

export default ArtworkCard;
