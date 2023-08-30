import styled from 'styled-components';
import mountainVideoPreview from '../../../assets/images/mountain_video_preview.jpg';
import mountainVideoPreviewWebp from '../../../assets/images/mountain_video_preview.webp';

export const StyledAboutSection = styled.div`
    display: grid;
    gap: 40px;
    grid-template: 1fr / 1fr;
    grid-template-areas:
        'article'
        'images';
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

    .image-outer {
        position: relative;
        height: 416px;
        display: grid;
        grid-area: images;
        justify-content: center;
        align-items: flex-start;
    }

    .image-wrapper {
        width: 100%;
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
        padding: 100px 0;

        .image-outer {
            height: 526px;
            justify-content: flex-end;
            align-items: end;
        }

        .image-outer:after {
            content: image-set(
                url(${mountainVideoPreviewWebp.replace('\\', '/')}),
                url(${mountainVideoPreview.replace('\\', '/')})
            );
            position: absolute;
            top: 0;
            left: 0;
            z-index: 0;
        }
    }
`;
