import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

type FontWeight = 200 | 300 | 400 | 500 | 600 | 700;

export interface TextProps {
    className?: string;
    fontSize?: number;
    weight?: FontWeight;
    color?: string;
    hoverColor?: string;
    underline?: boolean;
    lineHeight?: number;
    marginTop?: number;
    marginBottom?: number;
}

export const commonTextStyles = css<TextProps>`
    font-style: normal;
    color: ${({ color }) => color || '#18121e'};
    font-weight: ${({ weight }) => weight || 400};
    line-height: ${({ lineHeight }) => lineHeight || 20}px;
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
`;

export const Text = styled.span<TextProps>`
    font-style: normal;
    color: ${({ color }) => color || '#18121e'};
    font-weight: ${({ weight }) => weight || 400};
    line-height: ${({ lineHeight }) => lineHeight || 20}px;
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
`;

export const StyledLink = styled(Link)<TextProps>`
    font-style: normal;
    text-decoration: none;
    color: ${({ color }) => color || '#18121e'};
    font-weight: ${({ weight }) => weight || 400};
    line-height: ${({ lineHeight }) => lineHeight || 20}px;
    ${({ fontSize }) =>
        fontSize &&
        `
    font-size: ${fontSize}px;
    `};
    ${({ underline }) =>
        underline &&
        `
    text-decoration-line: underline;
    `};
    ${({ underline, color }) =>
        underline &&
        color &&
        `
    text-decoration-color: ${color};
    `};

    &:hover {
        color: ${({ hoverColor }) => hoverColor || '#F2BE22'};
        text-decoration-color: ${({ hoverColor }) => hoverColor || '#F2BE22'};
    }
`;

export const Title2 = styled(Text)<TextProps>`
    font-size: 24px;
    font-weight: 800;
    line-height: 28.8px;
`;

export const Title3 = styled(Text)<TextProps>`
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
`;

export const Title4 = styled(Text)<TextProps>`
    font-size: 18px;
    font-weight: 700;
    line-height: 20px; /* 111.111% */
    letter-spacing: 0.216px;
`;

export const Text1 = styled(Text)<TextProps>`
    font-size: 16px;
    line-height: 20px;
`;

export const Text2 = styled(Text)<TextProps>`
    font-size: 14px;
    line-height: 20px; /* 142.857% */
`;

export const Text3 = styled(Text)<TextProps>`
    font-size: 14px;
    font-weight: ${({ weight }) => weight || 600};
    line-height: 18px;
`;

export const UnderlinedText3 = styled(Text3)<TextProps>`
    text-decoration-line: underline;
`;
