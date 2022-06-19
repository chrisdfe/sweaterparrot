import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import styled from 'styled-components'

import Box from '../layout/Box';
import { Artwork } from "../../../types/artwork";

import { getArtworkUrl } from "../../../lib/utils";

interface Props {
  artwork: Artwork;
}

export const CardWrapper = styled.div`
  /* padding: 1rem; */
`;

export const ImageWrapper = styled.div`
  position: relative;
  aspect-ratio: 1;

  padding-top: 100%;
`;

export const Title = styled.h3``;

const TitleLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.palette.links.secondary.default};

  h3:before {
    content: "";
    display: inline-block;
    width: 1rem;
    border-bottom: 1px solid ${props => props.theme.palette.links.secondary.default};
    position: relative;
    bottom: 0.4rem;
    transition: width 0.3s, color 0.2s;
    margin-right: 1rem;
  }

  img {
    transition: all 0.2s;
  }

  &:hover {
    cursor: pointer;
    color: ${props => props.theme.palette.links.secondary.hover};

    img {
      transform: scale(1.05);
    }

    h3:before {
      width: 3rem;
      border-color: ${props => props.theme.palette.links.secondary.hover}
    }
  }
`;

const ArtworkCard = ({ artwork }: Props) => {

  const thumbnail = artwork.thumbnail;

  return (
    <Box margin={{ bottom: 3 }}>
      <CardWrapper>
        <Link href={getArtworkUrl(artwork)}>
          <TitleLink>
            <ImageWrapper>
              <Image
                src={thumbnail}
                layout="fill"
                sizes="200px"
                loading="lazy"
              />
            </ImageWrapper>
            <h3>{artwork.title}</h3>
          </TitleLink>
        </Link>
      </CardWrapper>
    </Box>
  );
};

export default ArtworkCard;
