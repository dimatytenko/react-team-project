import { MainLoaderBox } from './MainLoader.styled';
import PropTypes from 'prop-types';

import { Loader } from '../Loader';

export function MainLoader({ theme }) {
  return (
    <MainLoaderBox>
      <Loader
        color={`${theme.backgrounds.loaderPrimary}`}
        height={400}
        width={400}
      />
    </MainLoaderBox>
  );
}

MainLoader.propTypes = {
  theme: PropTypes.object,
};
