import { E, Func$, $ } from './e';


export const not = /*#__PURE__*/E((a: boolean) => !a);
export const truthy = /*#__PURE__*/E((a: any) => !!a);


export function and(a: $<boolean>, b: $<boolean>, ...bools: $<boolean>[]) {
  if (bools.length == 0) return E((a: boolean, b: boolean) => a && b)(a, b);
  if (bools.length == 1) return E((a: boolean, b: boolean, c: boolean) => a && b && c)(a, b, bools[0]);
  else return (
    E((a: boolean, b: boolean, ...l: boolean[]) => 
      a && b && l.every(_ => _)
    ) as Func$<boolean, boolean>
  )(a, b, ...bools);
}


export function or(a: $<boolean>, b: $<boolean>, ...bools: $<boolean>[]) {
  if (bools.length == 0) return E((a: boolean, b: boolean) => a || b)(a, b);
  if (bools.length == 1) return E((a: boolean, b: boolean, c: boolean) => a || b || c)(a, b, bools[0]);
  else return (
    E((a: boolean, b: boolean, ...l: boolean[]) => 
      a || b || l.some(_ => _)
    ) as Func$<boolean, boolean>
  )(a, b, ...bools);
}


export function eq(v: any) { return E((a: any) => a === v) }
export function neq(v: any) { return E((a: any) => a !== v) }
export function seq(v: any) { return E((a: any) => a == v) }
export function nseq(v: any) { return E((a: any) => a != v) }
export function instanceOf(v: any) { return E((a: any) => a instanceof v) }
