import { Observable } from 'rxjs';

import { $ } from '../e';
import { concat as _concat } from '../string';


export function concat(a: $<any>, ...bits: $<any>[]) {
  return (o: Observable<string>) => _concat(o, a, ...bits);
}
