import styled from 'styled-components';
import mountainVideoPreview from '../../../assets/images/mountain_video_preview.jpg';

export const StyledAboutSection = styled.div`
    display: grid;
    gap: 40px;
    grid-template: 1fr / 1fr;
    grid-template-areas:
        'article'
        'images';

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

    .image-outer {
        position: relative;
        height: 416px;
        display: grid;
        grid-area: images;
        justify-content: center;
        align-items: flex-end;
    }

    .image-wrapper {
        width: 358px;
        border-radius: 24px;
        z-index: 1;
    }

    .image {
        object-fit: contain;
        height: 100%;
        width: 100%;
        border-radius: 24px;
    }

    @media (min-width: 1180px) {
        gap: 120px;
        grid-template: 1fr / 1fr 1fr;
        grid-template-areas: 'images article';

        .image-outer {
            height: 526px;
            justify-content: flex-end;
        }

        .image-outer:after {
            content: url(${mountainVideoPreview});
            position: absolute;
            top: 0;
            left: 0;
            z-index: 0;
        }
    }
`;
