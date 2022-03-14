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

const colors = {
  Toast500: '#D28020',
};

const theme = {
  device,
  colors,
};

export default theme;
