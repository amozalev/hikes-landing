import styled from 'styled-components';

export type ContainerProps = {
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
    max-width: 1080px;
    margin: 0 auto;
    padding-top: ${({ paddingTop }) => paddingTop ?? '50'}px;
    padding-right: ${({ paddingRight }) => paddingRight ?? '16'}px;
    padding-bottom: ${({ paddingBottom }) => paddingBottom ?? '50'}px;
    padding-left: ${({ paddingLeft }) => paddingLeft ?? '16'}px;

    //@media (min-width: 391px) {
    //}
`;
