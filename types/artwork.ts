import { StaticImageData } from 'next/image'
export enum ArtworkBlockType {
  Image,
  Video,
  ImageCollage,
  WipSequence
}

export interface ArtworkBlockImage {
  type: ArtworkBlockType.Image,
  src: string,
}

export interface ArtworkBlockVideo {
  type: ArtworkBlockType.Video,
  src: string,
}

export interface ArtworkBlockImageCollage {
  type: ArtworkBlockType.ImageCollage,
  imagesSrcs: string[]
}

export interface ArtworkBlockWipSequence {
  type: ArtworkBlockType.WipSequence,
  srcs: string[]
}

export type ArtworkBlock =
  ArtworkBlockImage |
  ArtworkBlockVideo |
  ArtworkBlockImageCollage |
  ArtworkBlockWipSequence;


export type Artwork = {
  title: string;
  year: number;
  thumbnail: string | StaticImageData;
  blocks: ArtworkBlock[]
  slug?: string;
};
