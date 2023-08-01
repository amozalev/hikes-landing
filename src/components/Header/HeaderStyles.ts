import styled from 'styled-components';
import mountainsJpg from './images/mountains.jpg';
import mountainsWebp from './images/mountains.webp';

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    background-image: image-set(url(${mountainsWebp}), url(${mountainsJpg}));
    // background-image: url(${mountainsJpg});
    background-position: center;
    background-size: cover;

    //@media (min-width: 391px) {
    //    height: 985px;
    //}
`;

export const StyledHeaderTitle = styled.h1`
    display: flex;
    color: #fdfdfd;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;

    margin: 234px 13px 32px 0;
`;
