import * as S from './NavLink.Styled';
import { RightArrowIcon } from '../Icons/RightArrowIcon';
import { useState } from 'react';

export type NavLinkType = {
    text: string;
    showArrow?: boolean;
};

const NavLink = ({ text, showArrow = true }: NavLinkType) => {
    const [hovered, setHovered] = useState<boolean>(false);

    const color = hovered ? '#F2BE22' : '#FDFDFD';

    const mouseEnterHandler = () => {
        setHovered(true);
    };

    const mouseLeaveHandler = () => {
        setHovered(false);
    };

    return (
        <S.StyledNavLink
            to="./"
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            color={color}
            fontSize={14}
            weight={400}
            lineHeight={18}
            underline={hovered}
        >
            {showArrow ? <RightArrowIcon color={color} /> : null}
            {text}
        </S.StyledNavLink>
    );
};

export default NavLink;
