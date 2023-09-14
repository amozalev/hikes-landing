import * as S from './HikeSearchForm.Styled';
import Select from '../Select/Select';
import { Button } from '../Button/Button';
import { CalendarIcon } from '../Icons/CalendarIcon';
import DateInput from '../IconedInput/DateInput';

type Props = {
    className?: string;
};

const HikeSearchForm = ({ className }: Props) => {
    return (
        <S.HikeSearchFormStyled className={className}>
            <Select title="Локации для тура" description="выберите из списка" />
            <DateInput
                title="Дата похода"
                description="укажите диапазон"
                icon={<CalendarIcon />}
            />
            <Select title="Участники" description="минимум 4 человека" />
            <div>
                <Button title="Найти программу" color="#1A3E3E" large />
            </div>
        </S.HikeSearchFormStyled>
    );
};

export default HikeSearchForm;
