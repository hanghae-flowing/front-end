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
  Toast00: '#FFF5EA',
  Toast01: '#FFEFDD',
  Toast02: '#F1DOA8',
  Toast03: '#E7A960',
  Toast04: '#D19146',
  Toast05: '#B67830',
  Toast06: '#A56820',
  Toast07: '#885321',
  Toast08: '#71451B',
  Toast09: '#59391E',
  Toast10: '#402812',

  ToastBrown01: '#FCE6CC',
  ToastBrown02: '#E4BD8E',
  ToastBrown03: '#B57B38',
  ToastBrown04: '#885321',
  ToastBrown05: '#59391E',
  ToastBrown06: '#2C1C0D',
};

const secondaryColors = {
  ButterYellow01: '#FFFBEB',
  ButterYellow02: '#FFF6D3',
  ButterYellow03: '#FBECAF',
  ButterYellow04: '#F3E194',
  ButterYellow05: '#DAC77C',
  ButterYellow06: '#C6B160',

  StrawberryPink01: '#FDDEDE',
  StrawberryPink02: '#FFC2C2',
  StrawberryPink03: '#FFA9A9',
  StrawberryPink04: '#FF8282',
  StrawberryPink05: '#F66969',
  StrawberryPink06: '#D85252',

  Black: '#000000',
  Grey09: '#191919',
  Grey08: '#313131',
  Grey07: '#4A4A4A',
  Grey06: '#626262',
  Grey05: '#7A7A7A',
  Grey04: '#939393',
  Grey03: '#ACACAC',
  Grey02: '#C4C4C4',
  Grey01: '#DCDCDC',
  White: '#FFF5EA',
};

const typhography = {};

const theme = {
  device,
  colors,
  secondaryColors,
  typhography,
};

export default theme;
