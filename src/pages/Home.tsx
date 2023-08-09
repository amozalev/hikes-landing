import Header from '../components/Header/Header';
import AboutSection from '../components/Sections/AboutSection/AboutSection';
import AdvantagesSection from '../components/Sections/AdvantagesSection/AdvantagesSection';
import PopularHikesSection from '../components/Sections/PopularHikesSection/PopularHikesSection';
import BlogSection from '../components/Sections/BlogSection/BlogSection';
import { HIKES, POSTS } from '../constants';

const HomePage = () => {
    return (
        <>
            <Header />
            <AboutSection />
            <AdvantagesSection />
            <PopularHikesSection hikes={HIKES} />
            <BlogSection posts={POSTS} />
        </>
    );
};

export default HomePage;
