import { Observable } from 'rxjs';

import { $ } from '../e';
import {and as _and, or as _or, } from '../boolean';

export { not, truthy, eq, neq, seq, nseq, instanceOf } from '../boolean';


export function and(a: $<boolean>, ...bools: $<boolean>[]) {
  return (o: Observable<boolean>) => _and(o, a, ...bools);
}


export function or(a: $<boolean>, ...bools: $<boolean>[]) {
  return (o: Observable<boolean>) => _or(o, a, ...bools);
}
