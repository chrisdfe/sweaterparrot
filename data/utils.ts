import path from 'path';

export const getArtworkAssetPath = (src: string) => "/" + path.join("assets", "artworks", src);