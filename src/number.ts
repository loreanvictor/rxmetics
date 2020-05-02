import { E, Func$, $ } from './e';


export const neg = /*#__PURE__*/E((a: number) => -a);
export const inv = /*#__PURE__*/E((a: number) => 1/a);


export function add(a: $<number>, b: $<number>, ...nums: $<number>[]) {
  if (nums.length == 0) return E((a: number, b: number) => a + b)(a, b);
  if (nums.length == 1) return E((a: number, b: number, c: number) => a + b + c)(a, b, nums[0]);
  else return (
    E((a: number, b: number, ...l: number[]) => 
      l.reduce((t, x) => t + x, a + b)
    ) as Func$<number, number>
  )(a, b, ...nums);
}


export function sub(a: $<number>, b: $<number>, ...nums: $<number>[]) {
  if (nums.length == 0) return E((a: number, b: number) => a - b)(a, b);
  if (nums.length == 1) return E((a: number, b: number, c: number) => a - b - c)(a, b, nums[0]);
  else return (
    E((a: number, b: number, ...l: number[]) => 
      l.reduce((t, x) => t - x, a - b)
    ) as Func$<number, number>
  )(a, b, ...nums);
}


export function mul(a: $<number>, b: $<number>, ...nums: $<number>[]) {
  if (nums.length == 0) return E((a: number, b: number) => a * b)(a, b);
  if (nums.length == 1) return E((a: number, b: number, c: number) => a * b * c)(a, b, nums[0]);
  else return (
    E((a: number, b: number, ...l: number[]) => 
      l.reduce((t, x) => t * x, a * b)
    ) as Func$<number, number>
  )(a, b, ...nums);
}


export function div(a: $<number>, b: $<number>, ...nums: $<number>[]) {
  if (nums.length == 0) return E((a: number, b: number) => a / b)(a, b);
  if (nums.length == 1) return E((a: number, b: number, c: number) => a / b / c)(a, b, nums[0]);
  else return (
    E((a: number, b: number, ...l: number[]) => 
      l.reduce((t, x) => t / x, a / b)
    ) as Func$<number, number>
  )(a, b, ...nums);
}
