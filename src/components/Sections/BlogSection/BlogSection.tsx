import Section from '../../Section/Section';
import TinySlider from 'tiny-slider-react';
import { Button } from '../../Button/Button';
import Article from '../../Article/Article';
import BlogPostCard, {
    BlogPostCardType,
} from '../../BlogPostCard/BlogPostCard';

type Props = {
    posts: BlogPostCardType[];
};

const BlogSection = ({ posts }: Props) => {
    const settings = {
        lazyload: false,
        nav: false,
        mouseDrag: true,
        controls: false,
        fixedWidth: 285,
        center: true,
    };

    return (
        <Section
            description="делимся впечатлениями"
            title="Блог о путешествиях"
            backgroundColor="#F3F5F4"
        >
            <Article marginTop={32} gap={32}>
                <TinySlider settings={settings}>
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
        </Section>
    );
};

export default BlogSection;
