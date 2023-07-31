import styled from 'styled-components';
import mountainsImg from './images/mountains.jpg';

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    background: url(${mountainsImg}) 50% center;
    background-size: cover;
    height: 600px;

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
