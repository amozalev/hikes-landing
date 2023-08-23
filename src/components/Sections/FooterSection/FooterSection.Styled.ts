import styled from 'styled-components';

export const StyledFooterSection = styled.section`
    background: #1a3e3e;
    padding: 50px 0 80px;

    .wrapper {
        display: flex;
        flex-direction: column;
        gap: 50px;
    }

    .section {
        display: flex;
        flex-direction: column;
        max-width: 456px;
    }

    .contacts {
        display: flex;
        gap: 24px;
        margin-bottom: 30px;
    }

    .social-networks {
        display: flex;
        align-items: center;
        gap: 18.67px;
        padding: 2.67px;
    }

    .nav-wrapper {
        gap: 20px;
        max-width: 280px;
    }

    @media (min-width: 1180px) {
        padding: 178px 0 80px;

        .wrapper {
            flex-direction: row;
            gap: 0;
        }

        .nav-wrapper {
            margin-left: 50px;
        }

        .nav-wrapper:last-child {
            margin-left: 120px;
        }
    }
`;
