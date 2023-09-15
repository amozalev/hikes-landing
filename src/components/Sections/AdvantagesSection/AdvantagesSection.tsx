import * as S from './AdvantagesSection.Styled';
import * as T from '../../Text/TextStyles';
import ColoredSection from '../../Section/ColoredSection';
import { TouristsIcon } from '../../Icons/TouristsIcon';
import { ShieldIcon } from '../../Icons/ShieldIcon';
import { LabelIcon } from '../../Icons/LabelIcon';
import AdvantageIconCard from '../../AdvantageIconCard/AdvantageIconCard';
import { Button } from '../../Button/Button';
import SectionHeader from '../../SectionHeader/SectionHeader';
import Image, { ImageType } from '../../Image/Image';

type Props = {
    images: ImageType[];
};

const AdvantagesSection = ({ images }: Props) => {
    return (
        <ColoredSection backgroundColor="#F3F5F4">
            <S.StyledAdvantagesSection>
                <div className="article-outer">
                    <article className="article">
                        <SectionHeader
                            description="наше предложение"
                            title="Лучшие программы для тебя"
                        />
                        <T.Text1>
                            Разнообразие маршрутов позволит подобрать то, что
                            подойдет именно вам, в зависимости от вашего
                            возраста, подготовки и предпочтений. Существуют как
                            легкие маршруты на один день, так и длительные
                            походы туда, где практически невозможно найти людей.
                        </T.Text1>
                        <div className="advantages">
                            <AdvantageIconCard color={'#E5EEEB'}>
                                <TouristsIcon />
                            </AdvantageIconCard>
                            <div className="advantage">
                                <T.Title4>Опытный гид</T.Title4>
                                <T.Text2>
                                    Вас будет сопровождать опытный и надёжный
                                    гид с большим опытом походов в самых разных
                                    условиях. Наши сотрудники- высочайшие
                                    профессионалы своего дела и с вниманием
                                    подходят к потребностям каждого участника
                                    группы.
                                </T.Text2>
                            </div>
                            <AdvantageIconCard color={'#E3E6EE'}>
                                <ShieldIcon />
                            </AdvantageIconCard>
                            <div className="advantage">
                                <T.Title4>Безопасный поход</T.Title4>
                                <T.Text2>
                                    В своей работе мы придерживаемся высочайших
                                    стандартов безопасности и продумываем детали
                                    поездок до мелочей. Много лет успешной
                                    организации походов позволяют нам с
                                    гордостью считать себя одними из самых
                                    надёжных компаний на рынке.
                                </T.Text2>
                            </div>
                            <AdvantageIconCard color={'#F3F1E1'}>
                                <LabelIcon />
                            </AdvantageIconCard>
                            <div className="advantage">
                                <T.Title4>Лояльные цены</T.Title4>
                                <T.Text2>
                                    Мы стараемся гибко подходить к вопросу
                                    ценообразования и всегда стараемся
                                    предлагать приятные цены на наши услуги. Так
                                    же в течение года всегда можно найти для
                                    себя предложения по акции.
                                </T.Text2>
                            </div>
                        </div>
                        <div className="btn-wrapper">
                            <Button
                                title="Стоимость программ"
                                color="#FDFDFD"
                                backgroundColor="#1A3E3E"
                            />
                        </div>
                    </article>
                </div>
                <div className="gallery-outer">
                    <div className="gallery">
                        {images.map(({ image, imageWebp, alt }, ind) => {
                            return (
                                <Image
                                    key={ind}
                                    className="image"
                                    image={image}
                                    imageWebp={imageWebp}
                                    alt={alt}
                                />
                            );
                        })}
                    </div>
                </div>
            </S.StyledAdvantagesSection>
        </ColoredSection>
    );
};

export default AdvantagesSection;
