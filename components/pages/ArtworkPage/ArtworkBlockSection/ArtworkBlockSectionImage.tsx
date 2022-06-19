import Image from 'next/image';
import styled from 'styled-components';
import { ArtworkBlockImage } from '../../../../types/artwork';

const ImageWrapper = styled.div`
  position: relative;
`;

interface ImageBlockProps {
  block: ArtworkBlockImage
}

export default function ArtworkBlockSectionImage({ block }: ImageBlockProps) {
  return <>
    <ImageWrapper>
      <Image
        src={block.src}
        quality={100}
        layout="responsive"
        width="2048"
        height="2048"
      />
    </ImageWrapper>
  </>
}
