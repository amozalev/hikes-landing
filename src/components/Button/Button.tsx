import * as S from './ButtonStyles';
import * as T from '../Text/TextStyles';

type Props = {
    title: string;
    color?: string;
    backgroundColor?: string;
    large?: boolean;
};

export const Button = ({
    title,
    color,
    backgroundColor = '#fdfdfd',
    large = false,
}: Props) => {
    return (
        <S.StyledButton backgroundColor={backgroundColor} large={large}>
            <T.Text1 color={color} weight={600}>
                {title}
            </T.Text1>
        </S.StyledButton>
    );
};
