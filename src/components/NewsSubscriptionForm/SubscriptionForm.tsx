import * as S from './SubscriptionForm.Styled';
import * as T from '../Text/TextStyles';
import { Button } from '../Button/Button';
import Input from '../Input/Input';

const SubscriptionForm = () => {
    return (
        <S.StyledSubscriptionForm>
            <T.Text1 color="#f2be22" marginBottom={8}>
                актуально
            </T.Text1>
            <T.Title2 marginBottom={18}>
                Получайте полезные рассылки о путешествиях
            </T.Title2>
            <Input label="Введите адрес" marginBottom={16} />
            <div>
                <Button
                    title="Подписаться на новости"
                    color="#FDFDFD"
                    backgroundColor="#1A3E3E"
                />
            </div>
            <T.Text3 marginTop={24}>
                подписываясь на новости, вы автоматически соглашаетесь с{' '}
                <T.StyledLink to="./" underline>
                    условиями обработки персональных данных
                </T.StyledLink>{' '}
                и{' '}
                <T.StyledLink to="./" underline>
                    правилами рекламных рассылок
                </T.StyledLink>
            </T.Text3>
        </S.StyledSubscriptionForm>
    );
};

export default SubscriptionForm;
