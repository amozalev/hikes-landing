import styled from 'styled-components';
import bottomArrowIcon from '../../assets/icons/BottomArrowIcon.svg';

export const SelectStyled = styled.label`
    display: flex;
    flex-direction: column;
    gap: 8px;
    min-width: 270px;

    .select {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 14px 16px;
        border-radius: 8px;
        border: 1px solid #e1e3e4;
        cursor: pointer;

        appearance: none;

        color: #fdfdfd;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px;
        background: url(${bottomArrowIcon.replace('\\', '/')}) no-repeat right
            0.8em center;
    }

    .select option {
        color: #1a3e3e;
        background: rgba(255, 255, 255, 0.2);
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
