import styled from 'styled-components';

export type ContainerProps = {
    gap?: number;
    paddingTop?: number;
    paddingRight?: number;
    paddingBottom?: number;
    paddingLeft?: number;
};

export const StyledContainer = styled.div.attrs({
    className: 'container',
})<ContainerProps>`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1180px;
    margin: 0 auto;
    padding-top: ${({ paddingTop }) => paddingTop ?? '50'}px;
    padding-right: ${({ paddingRight }) => paddingRight ?? '16'}px;
    padding-bottom: ${({ paddingBottom }) => paddingBottom ?? '50'}px;
    padding-left: ${({ paddingLeft }) => paddingLeft ?? '16'}px;
    ${({ gap }) =>
        gap &&
        `
  gap: ${gap}px;
  `};

    @media (min-width: 1180px) {
        padding-left: 0;
        padding-right: 0;
    }
`;
