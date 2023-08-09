import { Hike } from './components/HikeCard/HikeCard';
import lakeImage from './assets/images/lake_in_mountains.jpg';
import mountainsNight from './assets/images/nignt_in_mountains.jpg';
import mountainsJoga from './assets/images/joga_in_mountains.jpg';
import italyImg from './assets/images/italy_post.jpg';
import flightImg from './assets/images/flight_post.png';
import backpackImg from './assets/images/backpack_post.png';
import mosqueImg from './assets/images/mosque_post.png';
import { BlogPostCardType } from './components/BlogPostCard/BlogPostCard';

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
