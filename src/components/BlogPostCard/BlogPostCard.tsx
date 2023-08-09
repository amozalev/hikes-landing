import * as S from './BlogPostCard.Styled';
import * as T from '../Text/TextStyles';

export type BlogPostCardType = {
    image: string;
    title: string;
    text: string;
    date: string;
};

const BlogPostCard = ({ image, title, text, date }: BlogPostCardType) => {
    return (
        <S.StyledBlogPostCard>
            <article className="card">
                <div className="image-wrapper">
                    <img className="image" src={image} />
                </div>
                <div className="content">
                    <div className="title">
                        <T.Title2>{title}</T.Title2>
                    </div>
                    <div className="text">
                        <T.Text2>{text}</T.Text2>
                    </div>
                    <div className="footer">
                        <T.Text2 color={'#F2BE22'} weight={700}>
                            {date}
                        </T.Text2>
                        <T.Link href="#" weight={700} color={'#1A3E3E'}>
                            Читать статью
                        </T.Link>
                    </div>
                </div>
            </article>
        </S.StyledBlogPostCard>
    );
};
export default BlogPostCard;
