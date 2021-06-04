import React from 'react';

import ProfilePage from '../ProfilePage';
import ButtonTheme from '../ButtonTheme';

import { Container, Header, BackIcon, ProfileInfo, BottomMenu, HomeIcon, SearchIcon, BellIcon, EmailIcon } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
        <Header>
            <button>
                <BackIcon />
            </button>

            <ProfileInfo>
                <strong>Felipe Borges</strong>
                <span>832 Tweets</span>
            </ProfileInfo>
            <ButtonTheme />
        </Header>

        <ProfilePage />

        <BottomMenu>
            <HomeIcon className="active" />
            <SearchIcon />
            <BellIcon />
            <EmailIcon />
        </BottomMenu>
    </Container>
  );
}

export default Main;