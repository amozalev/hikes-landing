import * as S from './ArticleStyles';

type Props = {
    children: React.ReactNode;
    gap?: number;
};

const Article: React.FC<Props> = ({ children, gap }) => {
    return <S.StyledArticle gap={gap}>{children}</S.StyledArticle>;
};

export default Article;
