import styled from 'styled-components';

type Props = {
    color?: string;
    backgroundColor?: string;
    large?: boolean;
};

export const StyledButton = styled.button<Props>`
    padding: ${({ large }) => (large ? '16px 36px' : '12px 24px')};
    ${({ backgroundColor }) =>
        backgroundColor &&
        `
    background: ${backgroundColor};
    `};
    letter-spacing: 0.192px;
    white-space: nowrap;
    border: none;
    border-radius: 4px;

    transition: background 250ms linear;

    &:hover {
        background: #f2be22;
        cursor: pointer;
    }
`;
