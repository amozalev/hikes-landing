import styled from 'styled-components';
import { Link } from 'react-router-dom';

type FontWeight = 200 | 300 | 400 | 500 | 600 | 700;

interface Props {
    weight?: FontWeight;
    color?: string;
    lineHeight?: number;
}

export const Text = styled.span<Props>`
    font-style: normal;
    color: ${({ color }) => color || '#18121e'};
    font-weight: ${({ weight }) => weight || 400};
    line-height: ${({ lineHeight }) => lineHeight || 20}px;
`;

export const StyledLink = styled(Link)<Props>`
    font-style: normal;
    text-decoration: none;
    color: ${({ color }) => color || '#18121e'};
    font-weight: ${({ weight }) => weight || 400};
    line-height: ${({ lineHeight }) => lineHeight || 20}px;
`;

export const Title1 = styled(Text)<Props>`
    font-family: 'NEXT ART', sans-serif;
    font-size: 28px;
    font-weight: 700;
    line-height: 28.8px;
`;

export const Title2 = styled(Text)<Props>`
    font-size: 20px;
    font-weight: 700;
    line-height: 26px; /* 130% */
`;

export const Title3 = styled(Text)<Props>`
    font-size: 18px;
    font-weight: 700;
    line-height: 20px; /* 111.111% */
    letter-spacing: 0.216px;
`;

export const Text1 = styled(Text)<Props>`
    font-size: 16px;
    line-height: 150%; /* 24px */
`;

export const Text2 = styled(Text)<Props>`
    font-size: 14px;
    line-height: 20px; /* 142.857% */
`;

export const Text3 = styled(Text)<Props>`
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    text-decoration-line: underline;
`;
