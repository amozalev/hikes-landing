import styled from 'styled-components';

export const IconedInputStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    .input {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 14px 16px;
        border-radius: 8px;
        border: 1px solid #e1e3e4;
    }

    .text-field {
        min-width: 210px;
        background: transparent;
        border: none;
    }

    .input::placeholder,
    .text-field {
        color: #fdfdfd;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px;
    }

    .description {
        padding: 0 8px;
        color: #fdfdfd;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 21px;
    }
`;
