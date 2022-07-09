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

export default function NotFoundPage() {
  return (
    <MainBackground>
      <Container>
        <NotFoundContainer>
          <NotFoundBoxContent>
            <NotFoundContentMod>Oops!</NotFoundContentMod>
            <NotFoundContent>
              We can't seem to find the page you're looking
              for.
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
