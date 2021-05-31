import React from 'react';

import Tweet from '../Tweet';

import { Container, Tab, Tweets } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
        <Tab>Tweets</Tab>

        <Tweets>
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
        </Tweets>
    </Container>
  );
}

export default Layout;