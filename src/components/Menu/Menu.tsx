import * as S from './MenuStyles';
import { LogoIcon } from '../Icons/LogoIcon';
import { MenuIcon } from '../Icons/MenuIcon';

const Menu = () => {
    return (
        <S.StyledMenu>
            <LogoIcon />
            <MenuIcon />
        </S.StyledMenu>
    );
};

export default Menu;
