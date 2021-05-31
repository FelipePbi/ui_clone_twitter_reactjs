import React from 'react';
import StickyBox from 'react-sticky-box';

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
                        elements={[
                            <FollowSuggestion
                                name="Luiz Batanero"
                                nickname="@luizbatanero"
                            />,
                            <FollowSuggestion
                                name="Luiz Batanero"
                                nickname="@luizbatanero"
                            />,
                            <FollowSuggestion
                                name="Luiz Batanero"
                                nickname="@luizbatanero"
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
