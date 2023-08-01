import * as S from './SectionStyles';

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
            <header className="header-wrapper">
                <span className="description">{description}</span>
                <h2 className="header">{title}</h2>
            </header>
            <div className="content">{children}</div>
        </S.StyledSection>
    );
};

export default Section;
