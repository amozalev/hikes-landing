import styled from 'styled-components';

export const PopularHikesSectionStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding: 50px 0;

    .button-outer {
        display: flex;
        justify-content: center;
    }

    @media (min-width: 1180px) {
        align-items: center;
        gap: 50px;
        padding: 80px 0 100px;
    }
`;
