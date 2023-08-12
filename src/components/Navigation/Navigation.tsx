import NavLink, { NavLinkType } from '../NavLink/NavLink';
import * as S from './Navigation.Styled';

type Props = {
    links: NavLinkType[];
};

const Navigation = ({ links }: Props) => {
    return (
        <S.StyledNavigation>
            {links.map(({ text }, index) => {
                return <NavLink key={index} text={text} />;
            })}
        </S.StyledNavigation>
    );
};

export default Navigation;
