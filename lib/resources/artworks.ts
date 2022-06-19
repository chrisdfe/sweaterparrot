import path from 'path';
import { artworks } from '../../data/artworks';

import { Artwork, ArtworkBlockType } from "../../types/artwork";

import { getArtworkSlugFromTitle } from "../utils";

export const getAllArtworks = async (): Promise<Artwork[]> => {
  return artworks;
};

export const getArtworkBySlug = async (slug: string): Promise<Artwork | null> => {
  const artwork = artworks.find((artwork) => {
    const artworkSlug = getArtworkSlugFromTitle(artwork.title);
    return artworkSlug === slug;
  });

  return artwork || null;
};