export * from './e';
export * from './boolean';
export * from './number';
export * from './string';

import { 
  neg, inv, add, sub, mul, div,
  not, truthy, and, or, eq, neq, seq, nseq, instanceOf,
  concat,
} from './pipes/index';

export const pipes = /*#__PURE__*/{
  neg, inv, add, sub, mul, div,
  not, truthy, and, or, eq, neq, seq, nseq, instanceOf,
  concat,
};
