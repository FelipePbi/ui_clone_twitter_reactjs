import React, {useMemo} from 'react';

import Tweet from '../Tweet';

import useProfile from '../../hooks/Profile.hook';

import { Container, Tab, Tweets } from './styles';

const Layout: React.FC = () => {

    const profile = useProfile();

    const TweetList = useMemo(() => {
        const tweets = profile?.tweets;

        if (tweets && tweets.length) {
            return  tweets.map(element => <Tweet data={{...element, avatar: profile?.avatar, name: profile?.name, nickname: profile?.nickname }} />);
        } 
        return [];      
    }, [profile]);

  return (
    <Container>
        <Tab>Tweets</Tab>

        <Tweets>
            {TweetList}
        </Tweets>
    </Container>
  );
}

export default Layout;