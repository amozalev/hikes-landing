import NavLink, { NavLinkType } from '../NavLink/NavLink';
import * as S from './Navigation.Styled';

type Props = {
    links: NavLinkType[];
    column?: boolean;
    showArrow?: boolean;
};

const Navigation = ({ links, column = true, showArrow = true }: Props) => {
    return (
        <S.StyledNavigation column={column}>
            {links.map(({ text }, index) => {
                return (
                    <NavLink key={index} text={text} showArrow={showArrow} />
                );
            })}
        </S.StyledNavigation>
    );
};

export default Navigation;
