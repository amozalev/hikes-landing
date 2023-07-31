import { FC, ReactNode } from 'react';
import * as S from './ContainerStyles';

type Props = {
    children?: ReactNode;
};

const Container: FC<Props> = ({ children }) => {
    return <S.StyledContainer>{children}</S.StyledContainer>;
};

export default Container;
