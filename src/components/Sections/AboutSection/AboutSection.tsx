import * as S from './AboutSectionStyles';
import * as T from '../../Text/TextStyles';
import Section from '../../Section/Section';
import Article from '../../Article/Article';
import { Button } from '../../Button/Button';
import houseVideoPreview from '../../../assets/images/house-video-preview.jpg';

const AboutSection = () => {
    return (
        <Section
            description="о нашем походе"
            title="Исследуйте все горные массивы мира вместе с нами"
        >
            <S.StyledAboutSection>
                <Article marginTop={24}>
                    <T.Text1>
                        Его корни уходят в один фрагмент классической латыни 45
                        года н.э., то есть более двух тысячелетий назад. Ричард
                        МакКлинток, профессор латыни из колледжа Hampden-Sydney,
                        штат Вирджиния, взял одно из самых странных слов в Lorem
                        Ipsum, "consectetur"и занялся его поисками в
                        классической латинской литературе.
                    </T.Text1>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '24px',
                        }}
                    >
                        <Button
                            title="Программа тура"
                            color="#FDFDFD"
                            backgroundColor="#1A3E3E"
                        />
                    </div>
                    <div
                        className="image-wrapper"
                        style={{ marginTop: '40px' }}
                    >
                        <img className="image" src={houseVideoPreview} />
                    </div>
                </Article>
            </S.StyledAboutSection>
        </Section>
    );
};

export default AboutSection;
