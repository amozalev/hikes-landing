import * as S from './CompanyInfoSection.Styled';
import * as T from '../../Text/TextStyles';
import Container from '../../Container/Container';

const CompanyInfoSection = () => {
    return (
        <S.StyledCompanyInfoSecion>
            <Container
                paddingTop={0}
                paddingRight={0}
                paddingBottom={0}
                paddingLeft={0}
                gap={8}
            >
                <T.Text3 color="#ffffff">ООО "РумТибет", 2023</T.Text3>
                <T.StyledLink
                    to="./"
                    fontSize={14}
                    weight={600}
                    lineHeight={18}
                    color="#ffffff"
                    underline
                >
                    Политика обработки персональных данных
                </T.StyledLink>
            </Container>
        </S.StyledCompanyInfoSecion>
    );
};

export default CompanyInfoSection;
