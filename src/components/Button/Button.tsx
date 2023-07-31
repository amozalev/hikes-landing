import * as S from './ButtonStyles';

type Props = {
    title: string;
};

export const Button = ({ title }: Props) => {
    return <S.StyledButton>{title}</S.StyledButton>;
};
