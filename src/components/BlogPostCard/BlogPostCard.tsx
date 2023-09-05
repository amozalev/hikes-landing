import * as S from './BlogPostCard.Styled';
import * as T from '../Text/TextStyles';
import Image from '../Image/Image';

export type BlogPostCardType = {
    image: string;
    imageWebp: string;
    alt: string;
    title: string;
    text: string;
    date: string;
};

const BlogPostCard = ({
    image,
    imageWebp,
    alt,
    title,
    text,
    date,
}: BlogPostCardType) => {
    return (
        <S.StyledBlogPostCard>
            <div className="card">
                <div className="image-wrapper">
                    <Image
                        imageWebp={imageWebp}
                        image={image}
                        alt={alt}
                        className="image"
                    />
                </div>
                <div className="content">
                    <div className="title">
                        <S.H2>{title}</S.H2>
                    </div>
                    <div className="text">
                        <S.Text2>{text}</S.Text2>
                    </div>
                    <div className="footer">
                        <S.Text2 color={'#F2BE22'} weight={700}>
                            {date}
                        </S.Text2>
                        <T.StyledLink
                            className="read-link"
                            to="#"
                            weight={700}
                            color={'#1A3E3E'}
                        >
                            Читать статью
                        </T.StyledLink>
                    </div>
                </div>
            </div>
        </S.StyledBlogPostCard>
    );
};
export default BlogPostCard;
