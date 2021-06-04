import React from 'react';

import Button from '../Button';

import {
    Container,
    TopSide,
    Logo,
    MenuButton,
    HomeIcon,
    BellIcon,
    EmailIcon,
    FavoriteIcon,
    ProfileIcon,
    BottomSide,
    Avatar,
    ProfileData,
    ExitIcon,
} from './styles';

const Layout: React.FC = () => {
    return (
        <Container>
            <TopSide>
                <Logo />

                <MenuButton>
                    <HomeIcon />
                    <span>Página Inicial</span>
                </MenuButton>

                <MenuButton>
                    <BellIcon />
                    <span>Notificações</span>
                </MenuButton>

                <MenuButton>
                    <EmailIcon />
                    <span>Mensagens</span>
                </MenuButton>

                <MenuButton>
                    <FavoriteIcon />
                    <span>Favoritos</span>
                </MenuButton>

                <MenuButton className="active">
                    <ProfileIcon />
                    <span>Perfil</span>
                </MenuButton>

                <Button>
                    <span>Tweetar</span>
                </Button>
            </TopSide>

            <BottomSide>
                <Avatar />

                <ProfileData>
                    <strong>Felipe Borges</strong>
                    <span>@felipe_borges</span>
                </ProfileData>

                <ExitIcon />
            </BottomSide>
        </Container>
    );
};

export default Layout;
