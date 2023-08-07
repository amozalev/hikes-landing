import Section from '../../Section/Section';
import HikeCard, { Hike } from '../../HikeCard/HikeCard';
import Article from '../../Article/Article';
import { Button } from '../../Button/Button';
import TinySlider from 'tiny-slider-react';
import 'tiny-slider/dist/tiny-slider.css';

// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import {
//     Swiper,
//     Navigation,
//     Pagination,
//     Scrollbar,
//     EffectCoverflow
// } from 'swiper/dist/js/swiper.esm.js';
// import { Swiper, Navigation, Pagination } from 'swiper/js/swiper.esm';
// import ReactIdSwiperCustom from 'react-id-swiper/lib/ReactIdSwiper.custom';
// import Swiper from 'swiper';

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import '../node_modules/swiper/dist/css/swiper.css';

// import Swiper from 'react-id-swiper';
// import 'swiper/css/swiper.css';

type Props = {
    hikes: Hike[];
};

const PopularHikesSection = ({ hikes }: Props) => {
    const settings = {
        lazyload: false,
        nav: false,
        mouseDrag: true,
        controls: false,
        // gutter: 100,
        // edgePadding: 10,
        // autoWidth: true,
        // viewportMax: true,
        fixedWidth: 285,
        // container: 'image-swiper',
        center: true,
    };

    // const params = {
    //     // Provide Swiper class as props
    //     Swiper,
    //     // Add modules you need
    //     // modules: [Navigation, Pagination],
    //     pagination: {
    //         el: '.swiper-pagination',
    //         type: 'bullets',
    //         clickable: true,
    //     },
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //     },
    //     spaceBetween: 30,
    // };

    return (
        <Section
            description="по версии отдыхающих"
            title="Популярные направления"
        >
            <Article marginTop={32} gap={32}>
                <TinySlider settings={settings}>
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
