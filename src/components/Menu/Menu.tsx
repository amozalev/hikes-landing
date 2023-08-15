import * as S from './Menu.Styled';
import { MENU_LINKS } from '../../constants';
import Navigation from '../Navigation/Navigation';
import { Button } from '../Button/Button';

const Menu = () => {
    return (
        <S.StyledMenu>
            <Navigation links={MENU_LINKS} column={false} showArrow={false} />
            <Button
                title="Консультация"
                color="#FDFDFD"
                backgroundColor="#1A3E3E"
            />
        </S.StyledMenu>
    );
};

export default Menu;
