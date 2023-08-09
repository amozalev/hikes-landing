import * as S from './HeaderStyles';
import * as T from '../Text/TextStyles';
import Menu from '../Menu/Menu';
import Container from '../Container/Container';
import { Button } from '../Button/Button';

const Header = () => {
    return (
        <S.StyledHeader>
            <Container>
                <Menu />
                <div className="title">
                    <T.Title1 color="#fdfdfd">
                        Насладись прогулкой в горы с командой единомышленников
                    </T.Title1>
                </div>
                <div>
                    <Button title="Найти программу" />
                </div>
            </Container>
        </S.StyledHeader>
    );
};

export default Header;
