import PropTypes from 'prop-types';

import { Loader } from '../Loader';
import {
  MainLoaderBox,
  MainLoaderBackdrop,
} from './MainLoader.styled';

export function MainLoader({ theme }) {
  return (
    <MainLoaderBackdrop>
      <MainLoaderBox>
        <Loader
          color={`${theme.backgrounds.loaderPrimary}`}
          height={400}
          width={400}
        />
      </MainLoaderBox>
    </MainLoaderBackdrop>
  );
}

MainLoader.propTypes = {
  theme: PropTypes.object,
};
