
import { configuration } from '@codedoc/core';

import { theme } from './theme';


export const config = /*#__PURE__*/configuration({
  theme,
  dest: {
    namespace: '/rxmetics',
    html: 'dist/docs',
    assets: 'dist/docs',
  },
  page: {
    title: {
      base: 'RxMetics'
    },
    fonts: {
      text: {
        url: 'https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;700&display=swap',
        name: 'Titillium Web',
      },
      code: {
        url: 'https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&display=swap',
        name: 'DM Mono'
      }
    }
  },
  misc: {
    github: {
      user: 'loreanvictor',
      repo: 'rxmetics',
    }
  },
});
