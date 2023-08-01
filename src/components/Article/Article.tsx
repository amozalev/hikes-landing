import * as S from './ArticleStyles';

type Props = {
    children: React.ReactNode;
    gap?: number;
    marginTop?: number;
};

const Article: React.FC<Props> = ({ children, gap, marginTop }) => {
    return (
        <S.StyledArticle gap={gap} marginTop={marginTop}>
            {children}
        </S.StyledArticle>
    );
};

export default Article;
