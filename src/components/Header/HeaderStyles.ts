import styled from 'styled-components';
import mountainsJpg from './images/mountains.jpg';
import mountainsWebp from './images/mountains.webp';

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    background-image: image-set(url(${mountainsWebp}), url(${mountainsJpg}));
    background-position: center;
    background-size: cover;

    .title {
        display: flex;
        margin: 234px 13px 32px 0;
    }

    //@media (min-width: 391px) {
    //    height: 985px;
    //}
`;
