import styled from 'styled-components';

export const GallerySectionStyled = styled.div`
    position: relative;
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

    @media (min-width: 768px) {
        align-items: center;
        gap: 50px;
        padding: 80px 0;

        .gallery {
            display: grid;
            grid-template: repeat(2, 250px) / repeat(4, minmax(auto, 280px));
            gap: 20px;
        }

        .slider {
            display: none;
        }

        .gallery-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 6px;
        }

        .grid-item-0 {
            grid-row: 1;
            grid-column: 1 / 3;
        }

        .grid-item-1 {
            grid-row: 1;
            grid-column: 3 / 3;
        }

        .grid-item-2 {
            grid-row: 1;
            grid-column: 4 / 4;
        }

        .grid-item-3 {
            grid-row: 2;
            grid-column: 1;
        }

        .grid-item-4 {
            grid-row: 2;
            grid-column: 2 / 4;
        }

        .grid-item-5 {
            grid-row: 2;
            grid-column: 4;
        }

        .button-outer {
            margin-bottom: 118px;
        }
    }
`;
