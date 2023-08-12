import { FC, ReactNode } from 'react';
import * as S from './ContainerStyles';
import { ContainerProps } from './ContainerStyles';

type Props = {
    children?: ReactNode;
} & ContainerProps;

const Container: FC<Props> = ({ children, ...rest }) => {
    return <S.StyledContainer {...rest}>{children}</S.StyledContainer>;
};

export default Container;
