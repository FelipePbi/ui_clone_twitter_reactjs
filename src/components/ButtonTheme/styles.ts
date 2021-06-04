import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex: 1;
    max-width: 200px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;   

    button:nth-child(1) {
        background-color: #33A1F2;
    }
    button:nth-child(2) {
        background-color: #E8265E;
    }
    button:nth-child(3) {
        background-color: #00C06B;
    }
    button:nth-child(4) {
        background-color: #e88300;
    }
`;

export const Button = styled.button`
    height: 2.3rem;
    width: 2.3rem;
    border-radius: 50%;

    cursor: pointer;

    &:hover {
        opacity: 0.7;
    }
`;
