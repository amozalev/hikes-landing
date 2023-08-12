import { Hike } from './components/HikeCard/HikeCard';
import lakeImage from './assets/images/lake_in_mountains.jpg';
import mountainsNight from './assets/images/nignt_in_mountains.jpg';
import mountainsJoga from './assets/images/joga_in_mountains.jpg';
import italyImg from './assets/images/italy_post.jpg';
import flightImg from './assets/images/flight_post.png';
import backpackImg from './assets/images/backpack_post.png';
import mosqueImg from './assets/images/mosque_post.png';
import balloons from './assets/images/balloons.jpg';
import lakeAndMountain from './assets/images/lake_and_mountain.jpg';
import palms from './assets/images/palms.jpg';
import photosOnMap from './assets/images/photos_and_map.jpg';
import rainbow from './assets/images/rainbow.jpg';
import waterfall from './assets/images/waterfall.jpg';
import { BlogPostCardType } from './components/BlogPostCard/BlogPostCard';
import { GalleryPhotoType } from './components/PhotoGallery/PhotoGallery';
import { NavLinkType } from './components/NavLink/NavLink';

export const HIKES: Hike[] = [
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

export const POSTS: BlogPostCardType[] = [
    {
        image: italyImg,
        title: 'Красивая Италия, какая она в реальности?',
        text: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
        date: '01/04/2023',
    },
    {
        image: flightImg,
        title: 'Долой сомнения! Весь мир открыт для вас!',
        text: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
        date: '01/04/2023',
    },
    {
        image: backpackImg,
        title: 'Как подготовиться к путешествию в одиночку?',
        text: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации. Надо подготовить список необходимых вещей.',
        date: '02/05/2023',
    },
    {
        image: mosqueImg,
        title: 'Индия ... летим?',
        text: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации. Удивительная и многообразная страна с неповторимой культурой.',
        date: '03/06/2023',
    },
];

export const PHOTOS: GalleryPhotoType[] = [
    { image: balloons, description: 'Фестиваль воздушных шаров' },
    { image: lakeAndMountain, description: 'Озеро в горах' },
    { image: palms, description: 'Райский пляж' },
    { image: photosOnMap, description: 'Прошлые и будущие путешествия' },
    { image: rainbow, description: 'Радуга' },
    { image: waterfall, description: 'Фантастический водопад' },
];

export const FOOTER_LINKS1: NavLinkType[] = [
    { text: 'Прогулки в горы летом' },
    { text: 'Зимние походы в горы' },
    { text: 'Посещение храмов в горах' },
    { text: 'Экстремальные виды туризма' },
    { text: 'Походы в джунглях Амазонииы' },
    { text: 'Поездка в Африку' },
];

export const FOOTER_LINKS2: NavLinkType[] = [
    { text: 'Как собрать в долгий поход?' },
    { text: 'Жизненно важные предметы для похода' },
    { text: 'Медицинская страховка, гарантии безопасности' },
    { text: 'Если вы врач - загляните сюда' },
];

export const TINY_SLIDER_SETTINGS = {
    lazyload: false,
    nav: false,
    mouseDrag: true,
    controls: false,
    gutter: 10,
    fixedWidth: 285,
    center: true,
};
