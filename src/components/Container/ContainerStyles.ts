import styled from 'styled-components';

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    //flex-grow: 1;
    margin: 20px 16px 50px;

    @media (min-width: 391px) {
        margin: 0 370px;
    }
`;
