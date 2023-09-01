import * as S from './AboutSectionStyles';
import * as T from '../../Text/TextStyles';
import ColoredSection from '../../Section/ColoredSection';
import { Button } from '../../Button/Button';
import houseVideoPreview from '../../../assets/images/house-video-preview.jpg';
import houseVideoPreviewWebp from '../../../assets/images/house-video-preview.webp';
import SectionHeader from '../../SectionHeader/SectionHeader';
import Image from '../../Image/Image';

const AboutSection = () => {
    return (
        <ColoredSection>
            <S.StyledAboutSection>
                <div className="article-outer">
                    <article className="article">
                        <SectionHeader
                            description="о нашем походе"
                            title="Исследуйте все горные массивы мира вместе с нами"
                        />
                        <T.Text1>
                            Его корни уходят в один фрагмент классической латыни
                            45 года н.э., то есть более двух тысячелетий назад.
                            Ричард МакКлинток, профессор латыни из колледжа
                            Hampden-Sydney, штат Вирджиния, взял одно из самых
                            странных слов в Lorem Ipsum, "consectetur"и занялся
                            его поисками в классической латинской литературе.
                        </T.Text1>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <Button
                                title="Программа тура"
                                color="#FDFDFD"
                                backgroundColor="#1A3E3E"
                            />
                        </div>
                    </article>
                </div>
                <div className="image-outer">
                    <div className="image-wrapper">
                        <Image
                            className="image"
                            imageWebp={houseVideoPreviewWebp}
                            image={houseVideoPreview}
                            alt="Video preview"
                        />
                    </div>
                </div>
            </S.StyledAboutSection>
        </ColoredSection>
    );
};

export default AboutSection;
