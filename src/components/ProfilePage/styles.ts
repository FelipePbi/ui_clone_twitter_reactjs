import styled, { css } from 'styled-components';
import { LocationOn, Cake } from '../../styles/Icons';
import Button from '../Button';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    max-height: 100%;
    overflow-y: auto;

    scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none;
    }
`;

export const Banner = styled.div<Props>`
    flex-shrink: 0;

    width: 100%;
    height: min(33vw, 199px);

    background: ${({ theme }) => theme.colors.twitter};
    background-image: url(${({ url }) => url});
    background-size: cover;
    background-position: center;

    position: relative;
`;

interface Props {
    url?: string | null;
}

export const Avatar = styled.div<Props>`
    width: max(45px, min(135px, 22vw));
    height: max(45px, min(135px, 22vw));

    border: 3.75px solid ${({ theme }) => theme.colors.primary};
    border-radius: 50%;

    position: absolute;
    bottom: max(-60px, -10vw);

    left: 15px;

    background: ${({ theme }) => theme.colors.gray};
    background-image: url(${({ url }) => url});
    background-size: cover;
`;

export const ProfileData = styled.div`
    padding: min(calc(10vw + 7px), 67px) 16px 0;

    display: flex;
    flex-direction: column;

    position: relative;

    > h1 {
        font-weight: bold;
        font-size: 19px;
    }

    > h2 {
        font-weight: normal;
        font-size: 15px;

        color: ${({ theme }) => theme.colors.gray};
    }

    > p {
        font-size: 15px;
        margin-top: 11px;

        > a {
            text-decoration: none;
            color: ${({ theme }) => theme.colors.twitter};
        }
    }

    > ul {
        list-style: none;
        margin-top: 10px;
        margin-bottom: 10px;

        > li {
            font-size: 15px;
            color: ${({ theme }) => theme.colors.gray};
            padding: 1px 0;

            display: flex;
            align-items: center;

            > svg {
                fill: ${({ theme }) => theme.colors.gray};
                margin-right: 5px;
            }
        }
    }
`;

const iconCSS = css`
    width: 15px;
    height: 15px;

    color: ${({ theme }) => theme.colors.gray};
`;

export const LocationIcon = styled(LocationOn)`
    ${iconCSS}
`;

export const CakeIcon = styled(Cake)`
    ${iconCSS}
`;

export const Followage = styled.div`
    display: flex;

    > span {
        font-size: 15px;
        color: ${({ theme }) => theme.colors.gray};

        & + span {
            margin-left: 20px;
        }
    }
`;

export const EditButton = styled(Button)`
    position: absolute;
    top: 2vw;
    right: 7px;

    padding: 4px 16px;
    font-size: 13px;

    @media (min-width: 320px) {
        top: 10px;
        padding: 10px 19px;
        font-size: 15px;
    }
    
`;