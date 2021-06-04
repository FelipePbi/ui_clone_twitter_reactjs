import React from 'react';

import useProfile from '../../hooks/Profile.hook';
import Feed from '../Feed';

import {
    Container,
    EditButton,
    Banner,
    Avatar,
    ProfileData,
    LocationIcon,
    CakeIcon,
    Followage,
} from './styles';

const ProfilePage: React.FC = () => {
    const profile = useProfile();

    return (
        <Container>
            <Banner>
                <Avatar url={profile?.avatar} />
            </Banner>

            <ProfileData>
                <EditButton outlined>Editar Perfil</EditButton>

                <h1>{profile?.name}</h1>
                <h2>{profile?.nickname}</h2>

                <p>
                    Developer at <a href="https://www.globo.com/">Globo</a>
                </p>

                <ul>
                    <li>
                        <LocationIcon />
                        {profile?.city}, {profile?.country}
                    </li>
                    <li>
                        <CakeIcon />
                        Nascido(a) em {profile?.birth}
                    </li>
                </ul>

                <Followage>
                    <span>
                        seguindo <strong>{profile?.followings} </strong>
                    </span>
                    <span>
                        <strong>{profile?.followers} </strong> seguidores
                    </span>
                </Followage>
            </ProfileData>

            <Feed />
        </Container>
    );
};

export default ProfilePage;
