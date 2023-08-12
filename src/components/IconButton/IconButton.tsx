import { MouseEventHandler } from 'react';
import * as S from './IconButton.Styled';

type Props = {
    icon: () => JSX.Element;
    onClick: MouseEventHandler<HTMLButtonElement>;
};

const IconButton = ({ icon: Icon, onClick }: Props) => {
    return (
        <S.StyledIconButton onClick={onClick}>
            <Icon />
        </S.StyledIconButton>
    );
};

export default IconButton;
