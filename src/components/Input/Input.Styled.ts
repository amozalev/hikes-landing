import styled from 'styled-components';
import { TextProps } from '../Text/TextStyles';

type Props = {
    marginTop?: number;
    marginBottom?: number;
};

export const StyledInput = styled.div<Props>`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 8px;
    ${({ marginTop }) =>
        marginTop &&
        `
    margin-top: ${marginTop}px
    `};
    ${({ marginBottom }) =>
        marginBottom &&
        `
    margin-bottom: ${marginBottom}px
    `};

    .input {
        padding: 12px 16px;
        border-radius: 4px;
        background: #f3f5f4;
        border: none;
    }

    .input,
    .input::placeholder {
        font-size: 14px;
        font-style: normal;
        font-weight: 300;
        line-height: 20px;
    }
`;

type LabelProps = {
    width?: number;
};

export const Label = styled.label<TextProps & LabelProps>`
    font-size: 16px;
    font-style: normal;
    color: ${({ color }) => color || '#18121e'};
    font-weight: ${({ weight }) => weight || 600};
    line-height: ${({ lineHeight }) => lineHeight || 20}px;
`;
