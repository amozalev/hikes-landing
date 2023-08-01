import styled from 'styled-components';

type Props = {
    color?: string;
    backgroundColor?: string;
};

export const StyledButton = styled.button<Props>`
    padding: 16px 36px;
    color: ${({ color }) => color ?? '#1a3e3e'};
    background: ${({ backgroundColor }) => backgroundColor ?? '#fdfdfd'};
    font-family: Nunito Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 125% */
    letter-spacing: 0.192px;
    border: none;
    border-radius: 4px;
`;
