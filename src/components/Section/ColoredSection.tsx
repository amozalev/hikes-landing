import * as S from './SectionStyles';
import Container from '../Container/Container';
import { ContainerProps } from '../Container/ContainerStyles';

type Props = {
    children?: React.ReactNode;
    backgroundColor?: string;
} & ContainerProps;

const ColoredSection: React.FC<Props> = ({
    children,
    backgroundColor,
    ...containerProps
}) => {
    return (
        <S.StyledColoredSection backgroundColor={backgroundColor}>
            <Container {...containerProps}>
                <div className="content">{children}</div>
            </Container>
        </S.StyledColoredSection>
    );
};

export default ColoredSection;
