import { Rings } from 'react-loader-spinner';

import React from 'react';
import PropTypes from 'prop-types';

export function Loader({
  color = '#4f4c4c',
  height = 80,
  width = 80,
}) {
  return (
    <div>
      <Rings color={color} height={height} width={width} />
    </div>
  );
}

Loader.propTypes = {
  color: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
};
