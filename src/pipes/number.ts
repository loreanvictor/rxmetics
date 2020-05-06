import { Observable } from 'rxjs';

import { $ } from '../e';
import { add as _add, sub as _sub, div as _div, mul as _mul } from '../number';


export { neg, inv } from '../number';


export function add(a: $<number>, ...nums: $<number>[]) {
  return (o: Observable<number>) => _add(o, a, ...nums);
}


export function sub(a: $<number>, ...nums: $<number>[]) {
  return (o: Observable<number>) => _sub(o, a, ...nums);
}


export function mul(a: $<number>, ...nums: $<number>[]) {
  return (o: Observable<number>) => _mul(o, a, ...nums);
}


export function div(a: $<number>, ...nums: $<number>[]) {
  return (o: Observable<number>) => _div(o, a, ...nums);
}
