import path from 'path';
import { artworks } from '../../data/artworks';

import { Artwork } from "../../types/artwork";

import { getArtworkSlugFromTitle } from "../utils";

export const getAllArtworks = async (): Promise<Artwork[]> => {
  return Promise.all(
    artworks.map(async (artwork) => {
      const images = artwork.images
        .map(
          (imagePath) =>
            "/" + path.join("assets", "artworks", imagePath)
        );

      return { ...artwork, images };
    })
  );
};


export const getArtworkBySlug = async (slug: string): Promise<Artwork | null> => {
  const artworks = await getAllArtworks();

  const artwork = artworks.find((artwork) => {
    const artworkSlug = getArtworkSlugFromTitle(artwork.title);
    return artworkSlug === slug;
  });

  return artwork || null;
};