import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import styled from 'styled-components'

import Box from '../layout/Box';
import { Project } from "../../../types/project";

import { getProjectUrl } from "../../../lib/utils";

import * as Styles from './ArtworkCard.styles';

interface Props {
  project: Project;
}

const TitleLink = styled.a`
  text-decoration: none;
  h3:before {
    content: "";
    display: inline-block;
    width: 1rem;
    border-bottom: 1px solid ${props => props.theme.palette.borders.primary};
    position: relative;
    bottom: 0.4rem;
    transition: width 0.3s, color 0.2s;
    margin-right: 1rem;
  }

  &:hover {
    cursor: pointer;
    
    h3:before {
      width: 3rem;
      border-color: ${props => props.theme.palette.links.primary.hover}
    }
  }
`;

const ProjectCard = ({ project }: Props) => {
  // TODO - "thumbnail" img instead
  const coverImage = project.images[0];

  return (
    <Box margin={{ bottom: 3 }}>
      <Styles.CardWrapper>
        <Link href={getProjectUrl(project)}>
          <TitleLink>
            <Styles.ImageWrapper>
              <Image src={coverImage} layout="fill" />
            </Styles.ImageWrapper>
            <h3>{project.title}</h3>
          </TitleLink>
        </Link>
      </Styles.CardWrapper>
    </Box>
  );
};

export default ProjectCard;
