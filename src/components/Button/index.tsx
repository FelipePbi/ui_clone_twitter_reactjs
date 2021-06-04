import styled from 'styled-components';

interface Props {
    outlined?: boolean;
}

export default styled.button<Props>`
    background: ${({ outlined, theme }) => outlined ? 'transparent' : theme.colors.twitter };
    color: ${({ outlined, theme }) => outlined ? theme.colors.twitter : theme.colors.white };
    border: ${({ outlined, theme }) => outlined ? `1px solid ${theme.colors.twitter}` : 'none'};

    padding: 16px;
    border-radius: 25px;

    font-weight: bold;
    font-size: 15px;

    cursor: pointer;
    outline: 0;

    &:hover {
        background: ${({ outlined, theme })  => outlined ? theme.colors.twitter_dark_hover : theme.colors.twitter_light_hover };
    }
`;