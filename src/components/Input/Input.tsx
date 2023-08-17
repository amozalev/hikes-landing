import * as S from './Input.Styled';

type Props = {
    label?: string;
    placeholder?: string;
    type?: string;
    width?: number;
    marginTop?: number;
    marginBottom?: number;
};

const Input = ({
    label,
    placeholder,
    type = 'text',
    width,
    ...rest
}: Props) => {
    return (
        <S.StyledInput {...rest}>
            {label ? <S.Label width={width}>{label}</S.Label> : null}
            <input className="input" type={type} placeholder={placeholder} />
        </S.StyledInput>
    );
};

export default Input;
