import * as S from './Select.Styled';

type Props = {
    title: string;
    description?: string;
};

const Select = ({ title, description }: Props) => {
    return (
        <S.SelectStyled>
            <select className="select">
                <option selected value="0">
                    {title}
                </option>
                <option value="1">Горы</option>
                <option value="2">Озеро среди гор</option>
                <option value="3">Звёздное небо</option>
            </select>
            <div className="description">{description}</div>
        </S.SelectStyled>
    );
};

export default Select;
