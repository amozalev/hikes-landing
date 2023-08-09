import * as S from './ButtonStyles';
import * as T from '../Text/TextStyles';

type Props = {
    title: string;
    color?: string;
    backgroundColor?: string;
};

export const Button = ({
    title,
    color,
    backgroundColor = '#fdfdfd',
}: Props) => {
    return (
        <S.StyledButton backgroundColor={backgroundColor}>
            <T.Text1 color={color} weight={600}>
                {title}
            </T.Text1>
        </S.StyledButton>
    );
};
