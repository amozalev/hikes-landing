import ColoredSection from '../../Section/ColoredSection';
import TinySlider from 'tiny-slider-react';
import { Button } from '../../Button/Button';
import Article from '../../Article/Article';
import BlogPostCard, {
    BlogPostCardType,
} from '../../BlogPostCard/BlogPostCard';

type Props = {
    posts: BlogPostCardType[];
    tinySliderSettings: any;
};

const BlogSection = ({ posts, tinySliderSettings }: Props) => {

    return (
        <ColoredSection
            description="делимся впечатлениями"
            title="Блог о путешествиях"
            backgroundColor="#F3F5F4"
        >
            <Article marginTop={32} gap={32}>
                <TinySlider settings={tinySliderSettings}>
                    {posts.map(({ ...props }, index) => (
                        <BlogPostCard key={index} {...props} />
                    ))}
                </TinySlider>
                <Button
                    title="Другие материалы"
                    color="#FDFDFD"
                    backgroundColor="#1A3E3E"
                />
            </Article>
        </ColoredSection>
    );
};

export default BlogSection;
