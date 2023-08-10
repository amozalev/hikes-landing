import * as S from './Input.Styled';

type Props = {
    label: string;
    width?: number;
    marginTop?: number;
    marginBottom?: number;
};

const Input = ({ label, width, ...rest }: Props) => {
    return (
        <S.StyledInput {...rest}>
            <S.Label width={width}>{label}</S.Label>
            <input
                className="input"
                type="text"
                placeholder="name@domain.com"
            />
        </S.StyledInput>
    );
};

export default Input;
