import styled from 'styled-components';

export const StyledCompanyInfoSection = styled.div`
    padding: 20px 47px;
    text-align: center;
    color: #ffffff;
    background: #18121e;

    .wrapper {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    @media (min-width: 1180px) {
        .wrapper {
            flex-direction: row;
            justify-content: space-between;
        }
    }
`;
