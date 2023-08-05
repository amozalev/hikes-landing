import * as S from './Rating.Styled';
import { StarIcon } from '../Icons/StarIcon';

type Props = {
    rating: number;
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
    zIndex?: number;
};

const Rating = ({ rating, ...props }: Props) => {
    return (
        <S.StyledRating {...props}>
            <div className="wrapper">
                <StarIcon />
            </div>
            <div className="wrapper">{rating}</div>
        </S.StyledRating>
    );
};

export default Rating;
