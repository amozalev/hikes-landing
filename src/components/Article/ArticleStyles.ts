import styled from 'styled-components';

type Props = {
    gap?: number;
    marginTop?: number;
};

export const StyledArticle = styled.article<Props>`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ gap }) => (gap ? gap : 32)}px;
    ${({ marginTop }) =>
        marginTop &&
        `
    margin-top: ${marginTop}px;
  `}
`;
