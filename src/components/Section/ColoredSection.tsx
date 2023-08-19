import * as S from './SectionStyles';
import Container from '../Container/Container';

type Props = {
    children?: React.ReactNode;
    backgroundColor?: string;
};

const ColoredSection: React.FC<Props> = ({ children, backgroundColor }) => {
    return (
        <S.StyledSection backgroundColor={backgroundColor}>
            <Container>
                <div className="content">{children}</div>
            </Container>
        </S.StyledSection>
    );
};

export default ColoredSection;
