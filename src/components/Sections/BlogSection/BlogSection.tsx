import * as S from './BlogSection.Styled';
import ColoredSection from '../../Section/ColoredSection';
import TinySlider from 'tiny-slider-react';
import { Button } from '../../Button/Button';
import BlogPostCard, {
    BlogPostCardType,
} from '../../BlogPostCard/BlogPostCard';
import SectionHeader from '../../SectionHeader/SectionHeader';

type Props = {
    posts: BlogPostCardType[];
    tinySliderSettings: any;
};

const BlogSection = ({ posts, tinySliderSettings }: Props) => {
    return (
        <ColoredSection backgroundColor="#F3F5F4">
            <S.BlogSectionStyled>
                <SectionHeader
                    description="делимся впечатлениями"
                    title="Блог о путешествиях"
                />
                <div className="posts">
                    {posts.map(({ ...props }, index) => (
                        <BlogPostCard key={index} {...props} />
                    ))}
                </div>
                <div className="slider">
                    <TinySlider settings={tinySliderSettings}>
                        {posts.map(({ ...props }, index) => (
                            <BlogPostCard key={index} {...props} />
                        ))}
                    </TinySlider>
                </div>
                <div>
                    <Button
                        title="Другие материалы"
                        color="#FDFDFD"
                        backgroundColor="#1A3E3E"
                    />
                </div>
            </S.BlogSectionStyled>
        </ColoredSection>
    );
};

export default BlogSection;
