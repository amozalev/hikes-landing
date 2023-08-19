import * as S from './AdvantagesSection.Styled';
import * as T from '../../Text/TextStyles';
import ColoredSection from '../../Section/ColoredSection';
import Article from '../../Article/Article';
import { TouristsIcon } from '../../Icons/TouristsIcon';
import { ShieldIcon } from '../../Icons/ShieldIcon';
import { LabelIcon } from '../../Icons/LabelIcon';
import AdvantageIconCard from '../../AdvantageIconCard/AdvantageIconCard';
import { Button } from '../../Button/Button';

const AdvantagesSection = () => {
    return (
        <ColoredSection
            description="наше предложение"
            title="Лучшие программы для тебя"
            backgroundColor="#F3F5F4"
        >
            <S.StyledAdvantagesSection>
                <Article marginTop={32} gap={32}>
                    <T.Text1>
                        Его корни уходят в один фрагмент классической латыни 45
                        года н.э., то есть более двух тысячелетий назад. Ричард
                        МакКлинток, профессор латыни из колледжа.
                    </T.Text1>
                    <div className="advantages">
                        <AdvantageIconCard color={'#E5EEEB'}>
                            <TouristsIcon />
                        </AdvantageIconCard>
                        <div className="advantage">
                            <T.Title4>Опытный гид</T.Title4>
                            <T.Text2>
                                Для современного мира базовый вектор развития
                                предполагает независимые способы реализации
                                соответствующих условий активизации.
                            </T.Text2>
                        </div>
                        <AdvantageIconCard color={'#E3E6EE'}>
                            <ShieldIcon />
                        </AdvantageIconCard>
                        <div className="advantage">
                            <T.Title4>Безопасный поход</T.Title4>
                            <T.Text2>
                                Для современного мира базовый вектор развития
                                предполагает независимые способы реализации
                                соответствующих условий активизации.
                            </T.Text2>
                        </div>
                        <AdvantageIconCard color={'#F3F1E1'}>
                            <LabelIcon />
                        </AdvantageIconCard>
                        <div className="advantage">
                            <T.Title4>Лояльные цены</T.Title4>
                            <T.Text2>
                                Для современного мира базовый вектор развития
                                предполагает независимые способы реализации
                                соответствующих условий активизации.
                            </T.Text2>
                        </div>
                    </div>
                    <Button
                        title="Стоимость программ"
                        color="#FDFDFD"
                        backgroundColor="#1A3E3E"
                    />
                </Article>
            </S.StyledAdvantagesSection>
        </ColoredSection>
    );
};

export default AdvantagesSection;
