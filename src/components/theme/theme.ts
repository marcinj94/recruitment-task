import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  fontFamily: "'Roboto', sans-serif;",
  screenWidthSize: {
    desktop: {
      hdTV: '1366px',
      fullHD: '1920px',
      HD: '1600px',
      WXGA: '1440px',
      SXGA: '1280px',
      XGA: '1024px',
    },
    mobile: {
      small: '320px',
      medium: '360px',
      large: '414px',
    },
    tablet: {
      small: '601px',
      medium: '768px',
      large: '800px',
      xlarge: '962px',
    },
  },
};

export { theme };
