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
                            title="Исследуйте горные массивы мира вместе с нами"
                        />
                        <T.Text1>
                            Походы в горы – отдых для тех, кто любит горные
                            пейзажи и не представляет свою жизнь без физической
                            активности. Именно в горах можно проверить себя на
                            прочность, вдохновиться на дальнейшие свершения,
                            найти друзей и единомышленников и привезти из
                            поездки огромное количество воспоминаний и кадров,
                            которые будут вас радовать всю оставшуюся жизнь.
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
