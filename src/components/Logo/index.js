import { useTheme } from 'styled-components';

import PropTypes from 'prop-types';

import logoWhite from '../../assets/images/logo-white.svg';
import logoColor from '../../assets/images/logo-color.svg';

export default function Logo({ width, height }) {
  const theme = useTheme();

  return (
    <img
      src={theme.name === 'darkTheme' ? logoWhite : logoColor}
      alt="PD Restaurant"
      width={width}
      height={height}
    />
  );
}

Logo.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};
