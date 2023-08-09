import Section from '../../Section/Section';
import HikeCard, { Hike } from '../../HikeCard/HikeCard';
import Article from '../../Article/Article';
import { Button } from '../../Button/Button';
import TinySlider from 'tiny-slider-react';
import 'tiny-slider/dist/tiny-slider.css';

type Props = {
    hikes: Hike[];
    tinySliderSettings: any;
};

const PopularHikesSection = ({ hikes, tinySliderSettings }: Props) => {
    return (
        <Section
            description="по версии отдыхающих"
            title="Популярные направления"
        >
            <Article marginTop={32} gap={32}>
                <TinySlider settings={tinySliderSettings}>
                    {hikes.map(({ rating, image, title, price }, index) => (
                        <HikeCard
                            key={index}
                            rating={rating}
                            image={image}
                            title={title}
                            price={price}
                        />
                    ))}
                </TinySlider>
                <Button
                    title="Рейтинг направлений"
                    color="#FDFDFD"
                    backgroundColor="#1A3E3E"
                />
            </Article>
        </Section>
    );
};

export default PopularHikesSection;
