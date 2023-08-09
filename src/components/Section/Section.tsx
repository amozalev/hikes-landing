import * as S from './SectionStyles';
import * as T from '../Text/TextStyles';
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
                    <T.Text1 color="#f2be22">{description}</T.Text1>
                    <T.Title2>{title}</T.Title2>
                </header>
                <div className="content">{children}</div>
            </Container>
        </S.StyledSection>
    );
};

export default Section;
