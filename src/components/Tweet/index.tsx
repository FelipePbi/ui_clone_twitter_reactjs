import React from 'react';

import {
    Container,
    Retweeted,
    Body,
    Avatar,
    Content,
    Header,
    Dot,
    Description,
    ImageContent,
    Icons,
    Status,
    CommentIcon,
    RetweetIcon,
    LikeIcon,
    RetweetedIcon
} from './styles';

import {Tweets} from '../../hooks/Profile.hook';

interface Props {
    data: Tweets
}


const Tweet: React.FC<Props> = ({data}) => {
    return (
        <Container>

            {data?.retweeted && (
                <Retweeted>
                    <RetweetedIcon />
                    Você retweetou
                </Retweeted>
            )}

            <Body>
                <Avatar url={data?.avatar } />
                <Content>
                    <Header>
                        <strong>{data?.name}</strong>
                        <span>{data?.nickname}</span>
                        <Dot />
                        <time>{data?.date}</time>
                    </Header>
                    <Description>{data?.description}</Description>

                    {data?.image && (
                        <ImageContent url={data?.image } />
                    )}

                    <Icons>
                        <Status>
                            <CommentIcon />
                            {data.comments}
                        </Status>
                        <Status>
                            <RetweetIcon />
                            {data.retweets}
                        </Status>
                        <Status>
                            <LikeIcon />
                            {data.likes}
                        </Status>
                    </Icons>
                </Content>
            </Body>
        </Container>
    );
};

export default Tweet;
