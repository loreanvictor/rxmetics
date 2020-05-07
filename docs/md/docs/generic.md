# Generic Functions

The core of **RxMetics** is basically the `E()` function (short for _Expression_),
which turns any given function to a similar function that accepts observables as well,
and returns an observable:

```ts
/*!*/import { E } from 'rxmetics';
import { interval } from 'rxjs';


const f = (x, y) => `2 * ${x} + ${y} ^ 2 = ${2 * x + y * y}`;
/*!*/const f$ = E(f);

/*!*/f$(interval(700), interval(500)).subscribe(console.log);

// Result:
// > 2 * 0 + 0 ^ 2 = 0
// > 2 * 0 + 1 ^ 2 = 1
// > 2 * 1 + 1 ^ 2 = 3
// > 2 * 1 + 2 ^ 2 = 6
// > 2 * 1 + 3 ^ 2 = 11
// > 2 * 2 + 3 ^ 2 = 13
// > ...
```

> :Buttons
>
> > :Button label=play_arrow, icon=true, url=https://stackblitz.com/edit/rxmetics-e-sample1
>
> > :CopyButton

---

## Arguments and Return Types

For any function `f()`, you can always provide non-observable values to `E(f)()`
as parameters as well. However, the return type will always be an observable:

```ts
import { E } from 'rxmetics';
import { interval } from 'rxjs';

const f = (x, y) => 2 * x + y * y;

E(f)(1, 2).subscribe(console.log); // --> result is 6
E(f)(1, interval(100))...          // --> this is acceptable
E(f)(interval(100), 5)...          // --> this is also acceptable
E(f)(interval(100), interval(200)) // --> this is also acceptable
```

---

## Emission Time

For any function `f()`, the observable returned by `E(f)` will start emitting
values after all of its observable arguments have at least emitted once. Afterwards,
it will re-calculate the value and emit the result for each new emission of its
observable arguments:

```ts
import { E } from 'rxmetics';
import { Subject } from 'rxjs';


const f$ = E((x, y, z) => (2 * x + y * y) / z);
const x$ = new Subject();
const y$ = new Subject();

f$(x$, y$, 5).subscribe(console.log);
x$.next(5);   // --> no logs
y$.next(6);   // --> 9.2
x$.next(4);   // --> 8.8
```

> :Buttons
>
> > :Button label=play_arrow, icon=true, url=https://stackblitz.com/edit/rxmetics-e-sample2
>
> > :CopyButton

> :ToCPrevNext