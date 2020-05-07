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


export function eq(a: $<any>, b: $<any>, ...rest: $<any>[]) {
  if (rest.length == 0) return E((a: any, b: any) => a === b)(a, b);
  if (rest.length == 1) return E((a: any, b: any, c: any) => (a === b) && (b === c))(a, b, rest[0]);
  else return (
    E((a: any, b: any, ...l: any[]) => 
      (a === b) && l.every(_ => _ === a)
    ) as Func$<any, boolean>
  )(a, b, ...rest);
}


export function neq(a: $<any>, b: $<any>, ...rest: $<any>[]) {
  if (rest.length == 0) return E((a: any, b: any) => a !== b)(a, b);
  if (rest.length == 1) return E((a: any, b: any, c: any) => (a !== b) || (b !== c))(a, b, rest[0]);
  else return (
    E((a: any, b: any, ...l: any[]) => 
      (a !== b) || l.some(_ => _ !== a)
    ) as Func$<any, boolean>
  )(a, b, ...rest);
}

