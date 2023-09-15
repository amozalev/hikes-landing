import * as S from './FooterSection.Styled';
import * as T from '../../Text/TextStyles';
import Container from '../../Container/Container';
import { TelegramIcon } from '../../Icons/TelegramIcon';
import { VkIcon } from '../../Icons/VkIcon';
import { PinterestIcon } from '../../Icons/PinterestIcon';
import { SkypeIcon } from '../../Icons/SkypeIcon';
import Navigation from '../../Navigation/Navigation';
import { FOOTER_LINKS1, FOOTER_LINKS2 } from '../../../constants';

const FooterSection = () => {
    return (
        <S.StyledFooterSection>
            <Container>
                <div className="wrapper">
                    <div className="section contacts-wrapper">
                        <T.Title3 color="#F3F5F4" marginBottom={17}>
                            Компания «РумТибет»
                        </T.Title3>
                        <T.Text2 color="#fff" marginBottom={30}>
                            Организуем походы по всему миру. Придерживаемся
                            высочайших стандартов безопасности и делаем своё
                            дело с любовью. Приглашаем вас отправиться в
                            путешествие вместе с нами.
                        </T.Text2>
                        <div className="contacts">
                            <T.StyledLink to="./" color="#fff" underline>
                                info@domain.com
                            </T.StyledLink>
                            <T.StyledLink to="./" color="#fff" underline>
                                +7 (123) 456-78-90
                            </T.StyledLink>
                        </div>
                        <div className="social-networks">
                            <TelegramIcon />
                            <VkIcon />
                            <PinterestIcon />
                            <SkypeIcon />
                        </div>
                    </div>
                    <div className="section nav-wrapper">
                        <T.Title3 color="#F3F5F4">Наши услуги</T.Title3>
                        <Navigation links={FOOTER_LINKS1} />
                    </div>
                    <div className="section nav-wrapper">
                        <T.Title3 color="#F3F5F4">
                            Важно для путешествий
                        </T.Title3>
                        <Navigation links={FOOTER_LINKS2} />
                    </div>
                </div>
            </Container>
        </S.StyledFooterSection>
    );
};

export default FooterSection;
