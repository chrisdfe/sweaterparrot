import fs from "fs/promises";
import path from "path";

import yaml from "js-yaml";

import { getArtworkUrl, getArtworkSlugFromTitle } from "../../lib/utils";

import { Artwork, RawArtworkMeta, ArtworkMeta } from "../../types/artwork";

const imageSrcBase = path.join(process.cwd(), "public", "assets", "artworks");
const artworksPath = path.join(process.cwd(), "_artworks");

export const getAllArtworks = async (): Promise<Artwork[]> => {
  const artworkDataFiles = (await fs.readdir(artworksPath)).filter((file) =>
    file.endsWith(".yml")
  );

  return Promise.all(
    artworkDataFiles.map(async (artworkDataFile) => {
      const fullPath = path.join(artworksPath, artworkDataFile);

      const fileContents = await fs.readFile(fullPath);

      const rawMeta =
        (yaml.load(fileContents.toString()) as RawArtworkMeta) || {};

      const imageFolderName = artworkDataFile.replace(".yml", "");
      const imageFolder = path.join(imageSrcBase, imageFolderName);

      const images = (await fs.readdir(imageFolder))
        .filter((file) => file.endsWith(".png") || file.endsWith(".jpg"))
        .map(
          (imagePath) =>
            "/" + path.join("assets", "artworks", imageFolderName, imagePath)
        );

      const { title = artworkDataFile } = rawMeta;
      const slug = getArtworkSlugFromTitle(title);

      const meta = {
        title,
        slug,
      };

      return {
        images,
        meta,
      };
    })
  );
};

export const getArtworkBySlug = async (
  slug: string
): Promise<Artwork | null> => {
  const artworks = await getAllArtworks();

  const artwork = artworks.find((artwork) => {
    const artworkSlug = getArtworkSlugFromTitle(artwork.meta.title);
    return artworkSlug === slug;
  });

  return artwork || null;
};
