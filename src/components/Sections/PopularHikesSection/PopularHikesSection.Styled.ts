import styled from 'styled-components';

export const PopularHikesSectionStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    padding: 50px 0;

    @media (min-width: 1180px) {
        gap: 50px;
        padding: 80px 0 100px;
    }
`;
