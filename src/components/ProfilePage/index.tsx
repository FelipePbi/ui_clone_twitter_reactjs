import React from 'react';

import { Container, EditButton, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
        <Banner>
            <Avatar />
        </Banner>

        <ProfileData>
            <EditButton outlined>Editar Perfil</EditButton>

            <h1>Felipe Borges</h1>
            <h2>@felipe_borges</h2>

            <p>
                Developer at <a href="https://www.globo.com/">Globo</a>
            </p>

            <ul>
                <li>
                    <LocationIcon />
                    Panambi, Brasil 
                </li>
                <li>
                    <CakeIcon />
                    Nascido(a) em 21 de novembro de 1995
                </li>
            </ul>

            <Followage>
                <span>
                    seguindo <strong>134</strong>
                </span>
                <span>
                    <strong>463</strong> seguidores
                </span>
            </Followage>
        </ProfileData>
    </Container>
  );
}

export default ProfilePage;