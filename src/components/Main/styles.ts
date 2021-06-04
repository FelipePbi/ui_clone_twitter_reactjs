import styled, { css } from 'styled-components';
import { ArrowLeft, Home, Search, Notifications, Email } from '../../styles/Icons'

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: min(601px, 100%);

    @media(min-width: 500px) {
        border-left: 1px solid ${({ theme }) => theme.colors.outline};
        border-right: 1px solid ${({ theme }) => theme.colors.outline};
    }
`;

export const Header = styled.div`
    z-index: 2;
    position: sticky;
    top: -0.1px;
    background: ${({ theme }) => theme.colors.primary};
    
    display: flex;
    align-items: center;

    text-align: left;

    padding: 8px 13px 9px 13px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.outline};

    > button {
        padding: 8px;
        border-radius: 50%;

        outline: 0;
        cursor: pointer;

        &:hover {
            background: ${({ theme }) => theme.colors.twitter_dark_hover};
        }
    }
`;

export const BackIcon = styled(ArrowLeft)`
    height: 24px;
    width: 24px;

    fill: ${({ theme }) => theme.colors.twitter};
`;

export const ProfileInfo = styled.div`
    margin-left: 17px;

    display: flex;
    flex: 1;
    flex-direction: column;

    > strong {
        font-size: 19px;
    }

    > span {
        font-size: 15px;
        color: ${({ theme }) => theme.colors.gray}
    }
`;

export const BottomMenu = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 2;

    background: ${({ theme }) => theme.colors.primary};
    width: 100%;
    border-top: 1px solid ${({ theme }) => theme.colors.outline};

    display: flex;
    justify-content: space-between;

    padding: 8px min(46px, max(10vw, 10px));

    @media(min-width: 500px) {
        display: none;
    }
`;

const iconCSS = css`
    width: 31px;
    height: 31px;

    cursor: pointer;

    fill: ${({ theme }) => theme.colors.gray};

    &:hover,
    &.active {
        fill: ${({ theme }) => theme.colors.twitter}
    }
`;

export const HomeIcon = styled(Home)`
    ${iconCSS}
`;

export const SearchIcon = styled(Search)`
    ${iconCSS}
`;

export const BellIcon = styled(Notifications)`
    ${iconCSS}
`;

export const EmailIcon = styled(Email)`
    ${iconCSS}
`;

