import styled from 'styled-components';

import Button from '../Button';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
        display: flex;
        align-items: center;
    }
`;

interface Props {
    url?: string;
}

export const Avatar = styled.div<Props>`
    width: 49px;
    height: 49px;
    border-radius: 50%;
    margin-right: 10px;
    background: ${({ theme }) => theme.colors.gray};
    background-image: url(${({ url }) => url});
    background-size: cover;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;

    > strong {
        font-size: 14px;
    }

    > span {
        font-size: 14px;
        color: ${({ theme }) => theme.colors.gray};
    }
`;

export const FollowButton = styled(Button)`
    padding: 6px 17px;
`;

