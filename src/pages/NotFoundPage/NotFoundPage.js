import { useEffect } from 'react';
import { Container } from '../../components/Container';
import {
  MainBackground,
  NotFoundImg,
  NotFoundContainer,
  NotFoundBoxContent,
  NotFoundContentMod,
  NotFoundContent,
} from './NotFoundPage.styled';
import meditation from '../../assets/images/notFound/meditation.png';
import { useTranslation } from 'react-i18next';

export default function NotFoundPage() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = '404 - SlimMom ';
  }, []);

  return (
    <MainBackground>
      <Container>
        <NotFoundContainer>
          <NotFoundBoxContent>
            <NotFoundContentMod>
              {t('notFound.title')}
            </NotFoundContentMod>
            <NotFoundContent>
              {t('notFound.description')}
            </NotFoundContent>
          </NotFoundBoxContent>
        </NotFoundContainer>
        <NotFoundImg>
          <img src={meditation} alt={'slim mom'} />
        </NotFoundImg>
      </Container>
    </MainBackground>
  );
}
