import Image from 'next/image';
import styled from 'styled-components';
import { ArtworkBlockWipSequence } from '../../../../types/artwork';

const WipSequenceWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const FrameWrapper = styled.div`
flex-grow: 0;
flex-shrink: 0;
flex-basis: 10%;
width: 10%;
padding: 2px;
`

const ImageWrapper = styled.div`
  position: relative;
  padding-top: 100%;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

interface ImageBlockProps {
  block: ArtworkBlockWipSequence
}

export default function ArtworkBlockSectionWipSequence({ block }: ImageBlockProps) {
  return (
    <WipSequenceWrapper>
      {block.srcs.map(src => (
        <FrameWrapper key={src}>
          <ImageWrapper>
            <Image
              src={src}
              layout="fill"
              sizes="(max-width: 500px) 100px"
              width="200"
              loading="lazy"
              height="200"
            />
          </ImageWrapper>
        </FrameWrapper>
      ))}
    </WipSequenceWrapper>
  )
}
