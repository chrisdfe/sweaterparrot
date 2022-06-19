import { useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { ArtworkBlockVideo } from '../../../../types/artwork';

const VideoWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

interface Props {
  block: ArtworkBlockVideo
}

export default function ArtworkBlockSectionImage({ block }: Props) {
  const videoElementRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const onVideoClick = useCallback(async () => {
    if (videoElementRef === null || videoElementRef.current === null) {
      return
    }

    const videoElement = (videoElementRef.current as HTMLMediaElement);

    if (isPlaying) {
      await videoElement.pause();

      setIsPlaying(false);
    } else {
      await videoElement.play();
      setIsPlaying(true);
    }
  }, [videoElementRef, isPlaying])

  return (
    <VideoWrapper>
      <video src={block.src} onClick={onVideoClick} ref={videoElementRef} controls={true} />
    </VideoWrapper>
  );
}
