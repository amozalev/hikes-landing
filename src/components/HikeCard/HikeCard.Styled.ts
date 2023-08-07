import styled from 'styled-components';

export const StyledHikeCard = styled.div`
    position: relative;
    width: 285px;
    height: 400px;
    border-radius: 24px;
    margin-right: 10px;

    img {
        position: absolute;

        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 24px;
    }

    .hike-card__footer {
        width: 100%;
        padding: 20px 24px;
        border-radius: 0 0 24px 24px;
        background: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(3px);
        color: #fdfdfd;

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 24px;
        position: absolute;
        bottom: 0;
    }

    //.hike-card__title {
    //    color: #fdfdfd;
    //    font-family: Nunito Sans;
    //    font-size: 18px;
    //    font-style: normal;
    //    font-weight: 700;
    //    line-height: 120%; /* 21.6px */
    //}

    .hike-card__price {
        display: flex;
        padding: 6px 12px;
        justify-content: center;
        align-items: center;

        color: #fdfdfd;
        //font-family: Nunito Sans;
        //font-size: 16px;
        //font-style: normal;
        //font-weight: 700;
        //line-height: 18px; /* 112.5% */
        border-radius: 4px;
        background: rgba(255, 255, 255, 0.3);
    }
`;
