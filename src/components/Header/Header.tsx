import * as S from './HeaderStyles';
import * as T from '../Text/TextStyles';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Menu from '../Menu/Menu';
import Container from '../Container/Container';
import { Button } from '../Button/Button';
import { LogoIcon } from '../Icons/LogoIcon';

const Header = () => {
    return (
        <S.StyledHeader>
            <Container paddingTop={20}>
                <div className="menu-wrapper">
                    <LogoIcon />
                    <Menu />
                    <BurgerMenu />
                </div>
                <div className="title">
                    <T.Title1 color="#fdfdfd">
                        Насладись прогулкой в горы с командой единомышленников
                    </T.Title1>
                </div>
                <div>
                    <Button title="Найти программу" color="#1A3E3E" large />
                </div>
            </Container>
        </S.StyledHeader>
    );
};

export default Header;
