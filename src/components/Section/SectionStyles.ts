import styled from 'styled-components';

type Props = {
    backgroundColor?: string | undefined;
};

export const StyledSection = styled.div<Props>`
    display: flex;
    flex-direction: column;
    max-width: 1080px;
    margin: 0 auto;
    padding: 50px 16px;
    font-family: Nunito Sans;
    background: ${({ backgroundColor }) => backgroundColor || '#fff'};

    .header-wrapper {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .description {
        color: #f2be22;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 125% */
    }

    .header {
        color: #18121e;
        font-size: 24px;
        font-style: normal;
        font-weight: 800;
        line-height: 120%; /* 28.8px */
    }
`;
