import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <Wrapper>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <UserButton>
              <User size={24} />
            </UserButton>
            <DesktopLogin>
              <Button>Subscribe</Button>
              <LoginButton>Already a subscriber?</LoginButton>
            </DesktopLogin>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <Logo />
      </MainHeader>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  @media ${QUERIES.laptopAndUp} {
    display: grid;
    grid-template-areas: 'cell';
    align-items: center;
    margin-block: 16px 80px;
  }
`

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    grid-area: cell;
    background: transparent;
    color: var(--color-gray-900);
    padding: 0;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.laptopAndUp} {
    grid-area: cell;
    margin-block: 0;
    justify-self: center;
  }
`;

const UserButton = styled.button`
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`

const DesktopLogin = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    margin-top: 28px;
  }
`

const LoginButton = styled.button`
  font-style: italic;
  font-size: 0.875rem;
  text-decoration: underline;
  color: var(--color-gray-900);
`

export default Header;
