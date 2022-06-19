import { Artwork, ArtworkBlockType } from '../types/artwork';
import { getArtworkAssetPath } from './utils';


export const artworks: Artwork[] = [
  {
    title: "Forest Cave Entrance I",
    year: 2021,
    thumbnail: getArtworkAssetPath('144/144.png'),
    blocks: [
      {
        type: ArtworkBlockType.Image,
        src: getArtworkAssetPath('144/144.png')
      }
    ],
  },
  {
    title: "Mausoleum",
    year: 2021,
    thumbnail: getArtworkAssetPath('156/156_dk.png'),
    blocks: [
      {
        type: ArtworkBlockType.Image,
        src: getArtworkAssetPath('156/156_dk.png')
      }
    ],
  },
  {
    title: "Conservatory",
    year: 2021,
    thumbnail: getArtworkAssetPath('160/160.png'),
    blocks: [
      {
        type: ArtworkBlockType.Image,
        src: getArtworkAssetPath('160/160.png')
      }
    ],
  },
  {
    title: "Forest Cave Entrance II",
    year: 2021,
    thumbnail: getArtworkAssetPath('161/161.png'),
    blocks: [
      {
        type: ArtworkBlockType.Image,
        src: getArtworkAssetPath('161/161.png')
      }
    ],
  },
  {
    title: "Carbon & Carbide",
    year: 2021,
    thumbnail: getArtworkAssetPath('194/194-lobby.png'),
    blocks: [
      {
        type: ArtworkBlockType.Image,
        src: getArtworkAssetPath('194/194-lobby.png')
      }
    ],
  },
  {
    title: "Cape Canaveral",
    year: 2021,
    thumbnail: getArtworkAssetPath('205/205.png'),
    blocks: [
      {
        type: ArtworkBlockType.Image,
        src: getArtworkAssetPath('205/205.png')
      }
    ],
  },
  {
    title: "1989",
    year: 2021,
    thumbnail: getArtworkAssetPath('205/205.png'),
    blocks: [
      {
        type: ArtworkBlockType.Video,
        src: getArtworkAssetPath('187/187_1.mp4')
      }
    ],
  },
  {
    title: "Witte Huis",
    year: 2021,
    thumbnail: getArtworkAssetPath('202/202.png'),
    blocks: [
      {
        type: ArtworkBlockType.Image,
        src: getArtworkAssetPath('202/202.png')
      }
    ],
  },
  {
    title: "Sainte Chapelle",
    year: 2021,
    thumbnail: getArtworkAssetPath('260/260-3.png'),
    blocks: [
      {
        type: ArtworkBlockType.Image,
        src: getArtworkAssetPath('260/260-3.png')
      },
      {
        type: ArtworkBlockType.WipSequence,
        srcs: [...new Array(15)]
          .map((_, index) => index + 1)
          .map(rawSrc => getArtworkAssetPath(`260/wip/260-wip-${rawSrc}.png`))
      }
    ],
  }
]