import * as S from './HeaderStyles';
import Menu from '../Menu/Menu';
import Container from '../Container/Container';
import { Button } from '../Button/Button';

const Header = () => {
    return (
        <S.StyledHeader>
            <Container>
                <Menu />
                <S.StyledHeaderTitle>
                    Насладись прогулкой в горы с командой единомышленников
                </S.StyledHeaderTitle>
                <div>
                    <Button title="Найти программу" />
                </div>
            </Container>
        </S.StyledHeader>
    );
};

export default Header;
