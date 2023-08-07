import * as S from './SectionStyles';
import Container from '../Container/Container';

type Props = {
    children?: React.ReactNode;
    description: string;
    title: string;
    backgroundColor?: string;
};

const Section: React.FC<Props> = ({
    children,
    description,
    title,
    backgroundColor,
}) => {
    return (
        <S.StyledSection backgroundColor={backgroundColor}>
            <Container>
                <header className="header-wrapper">
                    <span className="description">{description}</span>
                    <h2 className="header">{title}</h2>
                </header>
                <div className="content">{children}</div>
            </Container>
        </S.StyledSection>
    );
};

export default Section;
