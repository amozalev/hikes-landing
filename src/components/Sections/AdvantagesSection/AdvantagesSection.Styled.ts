import styled from 'styled-components';

export const StyledAdvantagesSection = styled.div`
    display: grid;
    gap: 40px;
    grid-template: 1fr / 1fr;
    grid-template-areas: 'article';
    padding: 50px 0;

    .article-outer {
        display: grid;
        grid-area: article;
        align-items: center;
    }

    .article {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    .advantages {
        display: grid;
        grid-template: repeat(3, 1fr) / 50px auto;
        gap: 32px 16px;
    }

    .advantage {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .gallery-outer {
        display: none;
    }

    .btn-wrapper {
        display: flex;
        justify-content: center;
    }

    @media (min-width: 1180px) {
        gap: 90px;
        grid-template: 1fr / 1fr 1fr;
        grid-template-areas: 'article gallery';
        padding: 80px 0 100px;

        .gallery-outer {
            display: grid;
            grid-area: gallery;
            justify-content: center;
            align-items: center;
        }

        .gallery {
            display: grid;
            grid-template: repeat(2, 250px) / repeat(2, 250px);
            gap: 10px;
            justify-content: center;
            align-items: center;
        }

        .image {
            width: 250px;
            height: 250px;
            object-fit: cover;
        }

        .image:nth-child(1),
        .image:nth-child(4) {
            border-radius: 0 50px;
        }

        .image:nth-child(2),
        .image:nth-child(3) {
            border-radius: 50px 0;
        }
    }
`;
