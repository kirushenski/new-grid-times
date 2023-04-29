import React from 'react';
import styled from 'styled-components/macro';
import { QUERIES } from '../../constants';

const MainStory = ({
  id,
  title,
  image,
  location,
  abstract,
  ...delegated
}) => {
  return (
    <Wrapper {...delegated}>
      <a href={`/story/${id}`}>
        <Image alt={image.alt} src={image.src} />
        <Heading>{title}</Heading>
      </a>
      <Abstract>
        <Location>{location}</Location> — {abstract}
      </Abstract>
      <ReadMore href="/story">Continue Reading…</ReadMore>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  color: var(--color-gray-900);
`;

const Image = styled.img`
  display: block;
  width: 100%;
  margin-bottom: 12px;
`;

const Heading = styled.h2`
  margin-bottom: 8px;
  font-size: 1.5rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

const Abstract = styled.p`
  --visible-lines-count: 8;

  font-size: 1rem;
  margin-bottom: 1em;
  white-space: pre-wrap;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--visible-lines-count);
  overflow: hidden;

  @media ${QUERIES.tabletAndUp} {
    --visible-lines-count: 15;
  }

  @media ${QUERIES.laptopAndUp} {
    --visible-lines-count: 10;
  }
`;

const Location = styled.span`
  text-transform: uppercase;
`;

const ReadMore = styled.a`
  font-weight: var(--font-weight-medium);
  font-style: italic;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 1px;
  }
`;

export default MainStory;
