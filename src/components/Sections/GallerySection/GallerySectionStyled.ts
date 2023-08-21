import styled from 'styled-components';

export const GallerySectionStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding: 50px 0;

    .gallery {
        display: none;
    }

    .slider {
        display: flex;
    }

    .button-outer {
        display: flex;
        justify-content: center;
    }

    @media (min-width: 1180px) {
        .gallery {
            display: grid;
            grid-template: repeat(2, 250px) / repeat(4, 280px);
            gap: 20px;
        }

        .slider {
            display: none;
        }

        .grid-image {
            display: grid;
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 6px;
        }

        .grid-image-0 {
            grid-row: 1;
            grid-column: 1 / 3;
        }

        .grid-image-1 {
            grid-row: 1;
            grid-column: 3 / 3;
        }

        .grid-image-2 {
            grid-row: 1;
            grid-column: 4 / 4;
        }

        .grid-image-3 {
            grid-row: 2;
            grid-column: 1;
        }

        .grid-image-4 {
            grid-row: 2;
            grid-column: 2 / 4;
        }

        .grid-image-5 {
            grid-row: 2;
            grid-column: 4;
        }
    }
`;
