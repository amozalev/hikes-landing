import * as S from './AdvantageIconCard.Styled';

type Props = {
    color: string;
    children: React.ReactNode;
};

const AdvantageIconCard: React.FC<Props> = ({ color, children }) => {
    return (
        <S.StyledAdvantageIconCard color={color}>
            {children}
        </S.StyledAdvantageIconCard>
    );
};

export default AdvantageIconCard;
