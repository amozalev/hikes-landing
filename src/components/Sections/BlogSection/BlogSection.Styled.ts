import styled from 'styled-components';

export const BlogSectionStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding: 50px 0;

    .posts {
        display: none;
    }

    .slider {
        display: block;
    }

    .button-outer {
        display: flex;
        justify-content: center;
    }

    @media (min-width: 1180px) {
        align-items: center;
        gap: 0;
        padding: 80px 0 100px;

        .posts {
            display: grid;
            grid-template: repeat(2, 1fr) / repeat(2, 1fr);
            column-gap: 20px;
            row-gap: 24px;
            margin: 40px 0 50px;
        }

        .slider {
            display: none;
        }
    }
`;
