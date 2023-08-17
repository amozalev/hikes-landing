import * as S from './IconedInput.Styled';

type Props = {
    title: string;
    description?: string;
    icon?: React.ReactNode;
};

const IconedInput = ({ title, description, icon }: Props) => {
    return (
        <S.IconedInputStyled>
            <div className="input">
                <input type="text" className="text-field" placeholder={title} />
                {icon}
            </div>
            <div className="description">{description}</div>
        </S.IconedInputStyled>
    );
};

export default IconedInput;
