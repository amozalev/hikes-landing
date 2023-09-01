import { MouseEventHandler } from 'react';
import * as S from './IconButton.Styled';

type Props = {
    icon: () => JSX.Element;
    onClick: MouseEventHandler<HTMLButtonElement>;
    ariaLabel: string;
};

const IconButton = ({ icon: Icon, onClick, ariaLabel }: Props) => {
    return (
        <S.StyledIconButton onClick={onClick} aria-label={ariaLabel}>
            <Icon />
        </S.StyledIconButton>
    );
};

export default IconButton;
