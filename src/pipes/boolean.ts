import { Observable } from 'rxjs';

import { $ } from '../e';
import {and as _and, or as _or, eq as _eq, neq as _neq } from '../boolean';

export { not, truthy, instanceOf } from '../boolean';


export function and(a: $<boolean>, ...bools: $<boolean>[]) {
  return (o: Observable<boolean>) => _and(o, a, ...bools);
}


export function or(a: $<boolean>, ...bools: $<boolean>[]) {
  return (o: Observable<boolean>) => _or(o, a, ...bools);
}


export function eq(a: $<any>, ...rest: $<any>[]) {
  return (o: Observable<any>) => _eq(o, a, ...rest);
}


export function neq(a: $<any>, ...rest: $<any>[]) {
  return (o: Observable<any>) => _neq(o, a, ...rest);
}
