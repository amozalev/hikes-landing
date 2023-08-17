import * as S from './Select.Styled';

type Props = {
    title: string;
    description?: string;
    icon?: React.ReactNode;
};

//TODO this is a mock of select
const Select = ({ title, description, icon }: Props) => {
    return (
        <S.SelectStyled>
            <div className="select">
                <div className="text-field">{title}</div>
                {icon}
            </div>
            <div className="description">{description}</div>
        </S.SelectStyled>
    );
};

export default Select;
