import styled from 'styled-components';

type Props = {
    backgroundColor?: string | undefined;
};

export const StyledBlogPostCard = styled.div<Props>`
    .card {
        display: flex;
        flex-direction: column;

        width: 285px;
        height: 496px;

        background: #fff;
        border-radius: 6px;
    }

    .image-wrapper {
        width: 285px;
        height: 280px;
    }

    .image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 6px 6px 0 0;
    }

    .content {
        height: 216px;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        gap: 16px;
        padding: 16px;
        border-radius: 0 0 6px 6px;
    }

    .text {
        //height: 80px;
        width: 253px;
        overflow: hidden;
        text-overflow: ellipsis;
        //white-space: nowrap;
        position: relative;

        //display: -webkit-box;
        //-webkit-line-clamp: 4;
        //-webkit-box-orient: vertical;
    }

    .text:after {
        content: '...';
    }

    //.text + * {
    //    text-overflow: ellipsis;
    //    //white-space: nowrap;
    //    display: -webkit-box;
    //    -webkit-line-clamp: 4;
    //    -webkit-box-orient: vertical;
    //}

    .footer {
        display: flex;
        justify-content: space-between;
    }
`;
