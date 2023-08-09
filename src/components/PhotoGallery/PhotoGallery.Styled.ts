import styled from 'styled-components';

export const StyledPhotoGallery = styled.div`
    .card {
        position: relative;
        width: 280px;
        height: 250px;
        border-radius: 6px;
    }

    .image {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 6px;
    }
`;
