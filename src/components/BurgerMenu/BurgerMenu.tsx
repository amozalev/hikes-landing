import { useState } from 'react';
import * as S from './BurgerMenu.Styled';
import { MenuIcon } from '../Icons/MenuIcon';
import { CloseIcon } from '../Icons/CloseIcon';
import Navigation from '../Navigation/Navigation';
import { MENU_LINKS } from '../../constants';
import IconButton from '../IconButton/IconButton';

const BurgerMenu = () => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <S.StyledBurgerMenu>
            <IconButton
                icon={MenuIcon}
                onClick={() => setOpen(true)}
                ariaLabel="Open menu"
            />
            <div className="menu" data-open={open}>
                <div className="menu-inner">
                    <div className="icon-wrapper">
                        <IconButton
                            icon={CloseIcon}
                            onClick={() => setOpen(false)}
                            ariaLabel="Close menu"
                        />
                    </div>
                    <Navigation links={MENU_LINKS} />
                </div>
            </div>
        </S.StyledBurgerMenu>
    );
};

export default BurgerMenu;
