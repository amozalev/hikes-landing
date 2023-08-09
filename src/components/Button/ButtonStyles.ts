import styled from 'styled-components';

type Props = {
    color?: string;
    backgroundColor?: string;
};

export const StyledButton = styled.button<Props>`
    padding: 16px 36px;
    ${({ backgroundColor }) =>
        backgroundColor &&
        `
    background: ${backgroundColor}
    `};
    letter-spacing: 0.192px;
    border: none;
    border-radius: 4px;
`;
