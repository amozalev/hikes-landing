import Header from '../components/Header/Header';
import AboutSection from '../components/Sections/AboutSection/AboutSection';
import AdvantagesSection from '../components/Sections/AdvantagesSection/AdvantagesSection';
import PopularHikesSection from '../components/Sections/PopularHikesSection/PopularHikesSection';
import lakeImage from '../assets/images/lake_in_mountains.jpg';
import mountainsNight from '../assets/images/nignt_in_mountains.jpg';
import mountainsJoga from '../assets/images/joga_in_mountains.jpg';
import { Hike } from '../components/HikeCard/HikeCard';

const HIKES: Hike[] = [
    {
        rating: 4.8,
        image: lakeImage,
        title: 'Озеро возле гор',
        price: '480$',
    },
    {
        rating: 4.9,
        image: mountainsNight,
        title: 'Ночь в горах',
        price: '500$',
    },
    {
        rating: 4.9,
        image: mountainsJoga,
        title: 'Йога в горах',
        price: '270$',
    },
];

const HomePage = () => {
    return (
        <>
            <Header />
            <AboutSection />
            <AdvantagesSection />
            <PopularHikesSection hikes={HIKES} />
        </>
    );
};

export default HomePage;
