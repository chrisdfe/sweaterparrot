export type RawArtworkMeta = {
  title?: string;
};

export type ArtworkMeta = {
  title: string;
  slug: string;
};

export type Artwork = {
  images: string[];
  meta: ArtworkMeta;
};
