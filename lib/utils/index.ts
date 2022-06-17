import slugify from "slugify";

import { Artwork } from "../../types/artwork";

export const getArtworkSlugFromTitle = (title: string): string => {
  return slugify(title || "", { lower: true });
};

export const getArtworkUrlFromTitle = (title: string): string => {
  const slug = getArtworkSlugFromTitle(title);
  return `/artwork/${slug}`;
};

export const getArtworkUrl = (artwork: Artwork): string => {
  return getArtworkUrlFromTitle(artwork.title || "");
};
