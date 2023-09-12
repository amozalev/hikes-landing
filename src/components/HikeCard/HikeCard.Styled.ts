import styled from 'styled-components';
import { commonTextStyles, TextProps } from '../Text/TextStyles';

export const StyledHikeCard = styled.div`
    .card {
        position: relative;
        width: 285px;
        height: 400px;
    }

    .img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 24px;
    }

    .content {
        width: 100%;
        padding: 20px 24px 25px;
        border-radius: 0 0 24px 24px;
        background: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(3px);

        display: flex;
        flex-direction: column;
        gap: 24px;
        position: absolute;
        top: 330px;
        transition: transform 350ms linear;
    }

    .content-header {
        display: flex;
        justify-content: space-between;
    }

    .description-wrapper {
        margin-top: 38px;
        display: none;
    }

    .description {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 9;
        -webkit-box-orient: vertical;
        margin-bottom: auto;
    }

    .button-wrapper {
        display: none;
    }

    .titles {
        display: flex;
        flex-direction: column;
    }

    .subtitle {
        display: none;
    }

    .price {
        display: flex;
        padding: 6px 12px;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        background: rgba(255, 255, 255, 0.3);
    }

    @media (min-width: 1180px) {
        .card {
            width: 380px;
            height: 500px;

            &:hover {
                .rating {
                    opacity: 0;
                }

                .content {
                    height: 100%;
                    transform: translateY(-410px);

                    .description-wrapper {
                        display: flex;
                        flex-grow: 1;
                    }

                    .button-wrapper {
                        display: flex;
                    }
                }
            }
        }

        .content {
            border-radius: 0 0 32px 32px;
        }

        .img {
            border-radius: 32px;
        }

        .content {
            top: 410px;
        }

        .subtitle {
            display: flex;
        }

        .price {
            padding: 8px 16px;
        }
    }
`;

export const CardTitle = styled.h3<TextProps>`
    ${commonTextStyles};
    font-size: 18px;
    font-weight: 700;
    line-height: 21.6px;

    @media (min-width: 1180px) {
        font-size: 24px;
        line-height: 28.8px;
    }
`;

export const CardPrice = styled.p<TextProps>`
    ${commonTextStyles};
    font-size: 16px;
    font-weight: 700;
    line-height: 18px;

    @media (min-width: 1180px) {
        font-size: 20px;
        line-height: 24px;
    }
`;
