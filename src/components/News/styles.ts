import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    
    font: 14px;

    span {
        color: ${({ theme }) => theme.colors.gray};

        margin-bottom: 3px;
    }
`;

