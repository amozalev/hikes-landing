import { memo } from 'react';
import * as S from './HikeCard.Styled';
import * as T from './../Text/TextStyles';
import Rating from '../Rating/Rating';
import Image, { ImageType } from '../Image/Image';

export type Hike = {
    rating: number;
    title: string;
    price: string;
} & ImageType;

const HikeCard = memo(({ rating, image, imageWebp, title, price }: Hike) => {
    return (
        <S.StyledHikeCard>
            <div className="card">
                <Rating rating={rating} top={36.8} right={0} zIndex={10} />
                <Image
                    className="hike-card__image"
                    imageWebp={imageWebp}
                    image={image}
                    alt={title}
                />
                <div className="hike-card__footer">
                    <T.Title4 color="#FDFDFD">{title}</T.Title4>
                    <div className="hike-card__price">
                        <T.Text1 color="#FDFDFD">{price}</T.Text1>
                    </div>
                </div>
            </div>
        </S.StyledHikeCard>
    );
});

export default HikeCard;
