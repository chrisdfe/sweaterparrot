import { ArtworkBlock, ArtworkBlockType } from '../../../../types/artwork';
import Box from "../../../lib/layout/Box";

import ArtworkBlockSectionImage from './ArtworkBlockSectionImage';
import ArtworkBlockSectionVideo from './ArtworkBlockSectionVideo';
import ArtworkBlockSectionWipSequence from './ArtworkBlockSectionWipSequence';

interface BlockProps {
  block: ArtworkBlock;
}

export default function ArtworkBlockSection({ block }: BlockProps) {
  return (
    <Box margin={{ bottom: 3 }}>
      {(() => {
        switch (block.type) {
          case ArtworkBlockType.Image:
            return <ArtworkBlockSectionImage block={block} />;
          case ArtworkBlockType.Video:
            return <ArtworkBlockSectionVideo block={block} />;
          case ArtworkBlockType.ImageCollage:
            return <>'collage'</>;
          case ArtworkBlockType.WipSequence:
            return <ArtworkBlockSectionWipSequence block={block} />;
        }
      })()}
    </Box>
  )
}