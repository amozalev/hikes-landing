import * as S from './ButtonStyles';

type Props = {
    title: string;
    color?: string;
    backgroundColor?: string;
};

export const Button = ({ title, color, backgroundColor }: Props) => {
    return (
        <S.StyledButton color={color} backgroundColor={backgroundColor}>
            {title}
        </S.StyledButton>
    );
};
