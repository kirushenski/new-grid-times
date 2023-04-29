import React from 'react';
import styled from 'styled-components/macro';

import { MARKET_DATA, SPORTS_STORIES } from '../../data';

import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';
import { QUERIES } from '../../constants';

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: '/markets',
            content: 'Visit Markets data »',
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: '/sports',
            content: 'Visit Sports page »',
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <MiniStory key={data.id} {...data} />
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 48px;

  @media ${QUERIES.tabletAndUp} {
    gap: 64px;
  }

  @media ${QUERIES.laptopAndUp} {
    gap: 16px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const MarketsSection = styled.section`
  @media ${QUERIES.laptopAndUp} {
    padding-right: 16px;
    border-right: 1px solid var(--color-gray-300);
  }
`;

const MarketCards = styled.div`
  --market-card-max-width: min(180px, 100%);

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--market-card-max-width), 1fr));
  gap: 16px;
`;

const SportsSection = styled.section``;

const SportsStories = styled.div`
  --sports-story-max-width: min(180px, 100%);

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--sports-story-max-width), 1fr));
  gap: 16px;

  @media ${QUERIES.tabletAndUp} {
    overflow: auto;
    display: flex;

    > * {
      min-width: 220px;
    }
  }
`;

export default SpecialtyStoryGrid;
