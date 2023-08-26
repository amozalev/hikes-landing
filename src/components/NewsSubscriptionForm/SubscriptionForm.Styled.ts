import styled from 'styled-components';

export const StyledSubscriptionForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
    margin-top: 18px;
    padding: 24px;
    border-radius: 6px;
    background: #fdfdfd;
    box-shadow: 0 0 15px 0 rgba(24, 18, 30, 0.12);

    .titles,
    .form-outer {
        display: flex;
        flex-direction: column;
    }

    .form {
        display: flex;
        flex-direction: column;
        gap: 16px;
        align-items: stretch;
    }

    .disclaimer {
        margin-top: 24px;
    }

    @media (min-width: 1180px) {
        position: absolute;
        bottom: 0;
        transform: translateY(50%);
        flex-direction: row;
        gap: 64px;
        padding: 40px 100px;

        .form {
            flex-direction: row;
            align-items: end;
        }

        .disclaimer {
            margin-top: 8px;
        }
    }
`;
