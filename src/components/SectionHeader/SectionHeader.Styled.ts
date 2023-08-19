import styled from 'styled-components';

type Props = {
    marginBottom?: number;
};

export const SectionHeaderStyled = styled.header<Props>`
    display: flex;
    flex-direction: column;
    gap: 8px;
    ${({ marginBottom }) =>
        marginBottom &&
        `
    margin-bottom: ${marginBottom}px;
  `}
`;
