import * as S from './HikeCard.Styled';
import * as T from './../Text/TextStyles';
import Rating from '../Rating/Rating';

export type Hike = {
    rating: number;
    image: string;
    title: string;
    price: string;
};

const HikeCard = ({ rating, image, title, price }: Hike) => {
    return (
        <S.StyledHikeCard>
            <Rating rating={rating} top={36.8} right={0} zIndex={10} />
            <img className="hike-card__image" src={image} />
            <div className="hike-card__footer">
                {/*<h2 className="hike-card__title">{title}</h2>*/}
                <T.Title3 color="#FDFDFD">{title}</T.Title3>
                <div className="hike-card__price">
                    <T.Text1 color="#FDFDFD">{price}</T.Text1>
                </div>
            </div>
        </S.StyledHikeCard>
    );
};

export default HikeCard;
