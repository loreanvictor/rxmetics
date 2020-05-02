import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

export type MonoOp<I, O> = (i: I) => O;
export type Op<I1, I2, O> = (i1: I1, i2: I2) => O;
export type TriOp<I1, I2, I3, O> = (i1: I1, i2: I2, i3: I3) => O;
export type QuadOp<I1, I2, I3, I4, O> = (i1: I1, i2: I2, i3: I3, i4: I4) => O;
export type Func<I, O> = (...i: I[]) => O;

export type $<T> = Observable<T>;
export type MonoOp$<I, O> = MonoOp<$<I>, $<O>>;
export type Op$<I1, I2, O> = Op<$<I1>, $<I2>, $<O>>;
export type TriOp$<I1, I2, I3, O> = TriOp<$<I1>, $<I2>, $<I3>, $<O>>;
export type QuadOp$<I1, I2, I3, I4, O> = QuadOp<$<I1>, $<I2>, $<I3>, $<I4>, $<O>>;
export type Func$<I, O> = Func<$<I>, $<O>>;


export function E<I, O>(f: MonoOp<I, O>): MonoOp$<I, O>;
export function E<I1, I2, O>(f: Op<I1, I2, O>): Op$<I1, I2, O>;
export function E<I1, I2, I3, O>(f: TriOp<I1, I2, I3, O>): TriOp$<I1, I2, I3, O>;
export function E<I1, I2, I3, I4, O>(f: QuadOp<I1, I2, I3, I4, O>): QuadOp$<I1, I2, I3, I4, O>;
export function E<I, O>(f: Func<I, O>): Func$<I, O>
export function E<I, O>(f: Func<I, O>): Func<$<I>, $<O>> {
  return (...obs) => {
    if (obs.length == 1) return obs[0].pipe(map(f as MonoOp<I, O>));
    else return combineLatest(...obs).pipe(map(v => f(...v)));
  }
}
