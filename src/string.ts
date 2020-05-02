import { E, Func$, $ } from './e';


export function concat(a: $<string>, b: $<any>, ...bits: $<any>[]) {
  if (bits.length == 0) return E((a: string, b: any) => a + b)(a, b);
  if (bits.length == 1) return E((a: string, b: any, c: any) => a + b + c)(a, b, bits[0]);
  else return (
    E((a: string, b: any, ...l: any[]) => 
      l.reduce((t, x) => t + x, a + b)
    ) as Func$<string | any, string>
  )(a, b, ...bits);
}


export function rxl(strings: TemplateStringsArray, ...values: $<any>[]) {
  return (
    E((...l: any[]) => 
      strings.reduce((t, p, i) => t + p + (i > values.length - 1 ? '' : l[i] || '').toString(), '')
    ) as Func$<any, string>
  )(...values);
}
