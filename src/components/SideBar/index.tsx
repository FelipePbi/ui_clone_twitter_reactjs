import React, { useMemo } from 'react';
import StickyBox from 'react-sticky-box';

import useProfile from '../../hooks/Profile.hook';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import {
    Container,
    SearchWrapper,
    SearchInput,
    SearchIcon,
    Body,
} from './styles';

const SideBar: React.FC = () => {
    const profile = useProfile();

    const followingSuggestion = useMemo(() => {
        const suggestions = profile?.followSuggestion;

        if (suggestions && suggestions.length) {
            return  suggestions.map(element => <FollowSuggestion name={element.name} nickname={element.nickname} avatar={element.avatar} />);
        } 
        return [];      
    }, [profile]);

    return (
        <Container>
            <SearchWrapper>
                <SearchInput placeholder="Buscar no Twitter" />
                <SearchIcon />
            </SearchWrapper>

            <StickyBox>
                <Body>
                    <List
                        title="Talvez você curta"
                        elements={followingSuggestion}
                    />

                    <List
                        title="Talvez você curta"
                        elements={[
                            <News
                                newsletter="Assuntos do momento"
                                description="Algum assunto qualquer"
                            />,
                            <News
                                newsletter="Assuntos do momento"
                                description="Algum assunto qualquer"
                            />,
                            <News
                                newsletter="Assuntos do momento"
                                description="Algum assunto qualquer"
                            />,
                        ]}
                    />

                    <List
                        title="Talvez você curta"
                        elements={[
                            <News
                                newsletter="Assuntos do momento"
                                description="Algum assunto qualquer"
                            />,
                            <News
                                newsletter="Assuntos do momento"
                                description="Algum assunto qualquer"
                            />,
                            <News
                                newsletter="Assuntos do momento"
                                description="Algum assunto qualquer"
                            />,
                        ]}
                    />

                    <List
                        title="Talvez você curta"
                        elements={[
                            <News
                                newsletter="Assuntos do momento"
                                description="Algum assunto qualquer"
                            />,
                            <News
                                newsletter="Assuntos do momento"
                                description="Algum assunto qualquer"
                            />,
                            <News
                                newsletter="Assuntos do momento"
                                description="Algum assunto qualquer"
                            />,
                        ]}
                    />
                </Body>
            </StickyBox>
        </Container>
    );
};

export default SideBar;
