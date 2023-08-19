import styled from 'styled-components';
import mountainsJpg from './images/mountains.jpg';
import mountainsWebp from './images/mountains.webp';

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    background-image: image-set(url(${mountainsWebp}), url(${mountainsJpg}));
    background-position: center;
    background-size: cover;
    padding: 20px 0 50px;

    .menu-wrapper {
        display: flex;
        justify-content: space-between;
        height: 44px;
    }

    .title {
        display: flex;
        margin: 234px 13px 32px 0;
    }

    .hike-search-form {
        display: none;
    }

    .hike-search-btn {
        display: flex;
    }

    @media (min-width: 1180px) {
        padding: 16px 0 82px;

        .hike-search-form {
            display: flex;
        }

        .hike-search-btn {
            display: none;
        }
    }
`;
