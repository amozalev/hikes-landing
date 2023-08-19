import styled from 'styled-components';

type Props = {
    gap?: number;
};

export const StyledArticle = styled.article<Props>`
    display: flex;
    flex-direction: column;
    align-items: center;
    ${({ gap }) =>
        gap &&
        `
    gap: ${gap}px;
  `}
`;
