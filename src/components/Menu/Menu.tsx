import { useState } from 'react';
import * as S from './MenuStyles';
import { LogoIcon } from '../Icons/LogoIcon';
import { MenuIcon } from '../Icons/MenuIcon';
import { CloseIcon } from '../Icons/CloseIcon';
import Navigation from '../Navigation/Navigation';
import { BURGER_MENU_LINKS1 } from '../../constants';
import IconButton from '../IconButton/IconButton';

const Menu = () => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <S.StyledMenu>
            <LogoIcon />
            <IconButton icon={MenuIcon} onClick={() => setOpen(true)} />
            <div className={`menu${open ? ' open' : ''}`}>
                <div className="icon-wrapper">
                    <IconButton
                        icon={CloseIcon}
                        onClick={() => setOpen(false)}
                    />
                </div>
                <Navigation links={BURGER_MENU_LINKS1} />
            </div>
        </S.StyledMenu>
    );
};

export default Menu;
