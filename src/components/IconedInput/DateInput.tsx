import { useEffect, useRef } from 'react';
import * as S from './DateInputStyled';
import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

type Props = {
    title: string;
    description?: string;
    icon?: React.ReactNode;
};

const DateInput = ({ title, description, icon, ...props }: Props) => {
    const inputRef = useRef<any>(null);
    const datePickerRef = useRef<any>();

    // Start init
    useEffect(() => {
        // Save instance for the further update
        datePickerRef.current = new AirDatepicker(
            inputRef.current as HTMLElement,
            {
                ...props,
            },
        );
    }, []);

    useEffect(() => {
        // Update if props are changed
        datePickerRef.current.update({ ...props });
    }, [props]);

    return (
        <S.DateInputStyled>
            <input className="input" placeholder={title} ref={inputRef} />
            <div className="label">{description}</div>
        </S.DateInputStyled>
    );
};

export default DateInput;
