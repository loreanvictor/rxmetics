import { createTheme } from '@codedoc/core/transport';


export const theme = /*#__PURE__*/createTheme({
  light: {
    primary: '#018383',
    background: '#f9fcfb',
  },
  dark: {
    primary: '#42e6a4',
    background: '#1b1919',
  },
  quote: {
    light: {
      background: '#eafbea',
      border: '#c5ecbe',
    },
  },
  toc: {
    light: {
      background: '#eafbea'
    },
  },
  code: {
    wmbar: false,
    light: {
      shadow: '',
      background: '#004445',
      lineCounterHighlight: '#c0ffb3',
      comment: '#889e81',
      lineHightlight: '#105465',
      lineHover: '#105465',
    },
    dark: {
      shadow: '',
      background: '#004445',
      lineCounterHighlight: '#c0ffb3',
      comment: '#889e81',
      lineHightlight: '#105465',
      lineHover: '#105465',
    }
  }
});
