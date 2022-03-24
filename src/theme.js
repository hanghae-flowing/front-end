const deviceSizes = {
  mobile: '390px',
  tablet: '1013px',
  laptop: '1920px',
};

const device = {
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
  laptop: `screen and (max-width: ${deviceSizes.laptop})`,
};

const colors = {};

const secondaryColors = {};

const typhography = {};

const theme = {
  device,
  colors,
  secondaryColors,
  typhography,
};

export default theme;
