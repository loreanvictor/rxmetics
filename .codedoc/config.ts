
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
    }
  },
  misc: {
    github: {
      user: 'loreanvictor',
      repo: 'rxmetics',
    }
  },
});
