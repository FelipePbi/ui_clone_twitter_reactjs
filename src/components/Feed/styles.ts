import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Tab = styled.div`
    margin-top: 10px;
    padding: 11px 0 15px;
    text-align: center;

    font-weight: bold;
    font-size: 15px;

    outline: 0;
    cursor: pointer;

    color: ${({ theme }) => theme.colors.twitter};

    border-bottom: 2px solid ${({ theme }) => theme.colors.twitter};

    &:hover {
        background: ${({ theme }) => theme.colors.twitter_dark_hover};
    }
`;

export const Tweets = styled.div`
    display: flex;
    flex-direction: column;

    flex-shrink: 0;
`;
