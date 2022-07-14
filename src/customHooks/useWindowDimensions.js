import { useEffect, useState } from 'react';
import _ from 'lodash';

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return {
    width,
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener(
      'resize',
      _.throttle(handleResize, 500)
    );
    return () =>
      window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
