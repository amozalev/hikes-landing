import styled from 'styled-components';
import CalendarIcon from '../../assets/icons/CalendarIcon.svg';

export const DateInputStyled = styled.label`
    display: flex;
    flex-direction: column;
    gap: 8px;
    min-width: 270px;

    color: #fdfdfd;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;

    .input {
        min-width: 210px;
        background: transparent;
        cursor: pointer;

        display: flex;
        align-items: center;
        gap: 8px;
        padding: 14px 16px;
        border-radius: 8px;
        border: 1px solid #e1e3e4;
        background: url(${CalendarIcon.replace('\\', '/')}) no-repeat right
            0.8em center;

        color: #fdfdfd;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px;
    }

    .label {
        padding: 0 8px;
    }
`;
