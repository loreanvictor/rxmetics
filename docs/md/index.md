![banner](banner.svg)

A simple [**RxJS**](https://rxjs-dev.firebaseapp.com/) library of
convenience functions for arithmetic operations on Observables.

> :Tabs
> > :Tab title=With RxMetics
> > ```ts
> > import { add } from 'rxmetics';
> > 
> > // ...
> > 
> > add(a, b)...
> > ```
>
> > :Tab title=With RxMetics Pipes
> > ```ts
> > import { add } from 'rxmetics/pipes';
> > 
> > // ...
> > 
> > a.pipe(add(b))...
> > ```
>
> > :Tab title=Without RxMetics
> > ```ts
> > import { combineLatest, ... } from 'rxjs';
> > import { map, ... } from 'rxjs/operators';
> > 
> > // ...
> > 
> > combineLatest(a, b).pipe(map(([a, b]) => a + b))...
> > ```

---

# Installation

Via NPM:

```bash
npm i rxmetics
```

> :Buttons
> > :CopyButton

Or if you want to get it via a CDN, then:

```html
<!--> Click on each line to copy it. -->
<script src="https://unpkg.com/rxjs/bundles/rxjs.umd.min.js"></script> <!--> Install Dependencies -->
<script src="https://unpkg.com/rxmetics/dist/bundles/rxmetics.es5.min.js"></script> <!--> Install RxMetics -->
```

---

# Usage

## Numeric Operations

```ts
import { interval } from 'rxjs';
import { add } from 'rxmetics';
import { mul } from 'rxmetics/pipes';

add(
  interval(1000), 
  interval(500).pipe(mul(2)), 
  1
).subscribe(console.log);

// Result:
// > 1, 3, 5, 6, 8, 10, 11, ...
```

> :Buttons
>
> > :Button label=Learn More, url=/docs/numbers
>
> > :Button label=play_arrow, icon=true, url=https://stackblitz.com/edit/rxmetics-sample1?file=index.ts
>
> > :CopyButton


## String Operations

```ts
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { rxl } from 'rxmetics';
import { concat } from 'rxmetics/pipes';

const num = interval(1000).pipe(
  map(x => '# ' + x),
  concat(' seconds')
);

rxl`You were here for ${num} ...`.subscribe(console.log);

// Result:
// > You were here for # 0 seconds ...
// > You were here for # 1 seconds ...
// > You were here for # 2 seconds ...
// ...
```

> :Buttons
>
> > :Button label=Learn More, url=/docs/string
>
> > :Button label=play_arrow, icon=true, url=https://stackblitz.com/edit/rxmetics-sample2?file=index.ts
>
> > :CopyButton

## Boolean Operations

```ts
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { and, eq, not } from 'rxmetics';


and(
  interval(1000).pipe(map(x => x % 2), eq(0)),
  interval(500).pipe(map(x => x % 2), eq(1)),
).pipe(not).subscribe(console.log);

// Result:
// true, false, true, true, true, true, true, false, true, ...
```

> :Buttons
>
> > :Button label=Learn More, url=/docs/boolean
>
> > :Button label=play_arrow, icon=true, url=https://stackblitz.com/edit/rxmetics-sample3?file=index.ts
>
> > :CopyButton

## Generic Functions

```ts
import { interval } from 'rxjs';
import { E } from 'rxmetics';


interval(1000).pipe(E(Math.sqrt)).subscribe(console.log);

// Result:
// > 0
// > 1
// > 1.4142135623730951
// > 1.7320508075688772
// > 2
// > 2.23606797749979
// > 2.449489742783178
// ...
```

> :Buttons
>
> > :Button label=Learn More, url=/docs/generic
>
> > :Button label=play_arrow, icon=true, url=https://stackblitz.com/edit/rxmetics-sample4?file=index.ts
>
> > :CopyButton

---

# Example

Here is a complete example of fun stuff you can do easily with **RxMetics**:

```ts
import { mul, add, div, E, rxl } from 'rxmetics';
import { sub, neg } from 'rxmetics/pipes';
import { fromEvent } from 'rxjs';
import { pluck } from 'rxjs/operators';


const cx = window.innerWidth / 2;                                 // --> center of screen
const cy = window.innerHeight / 2;                                // --> center of screen
const dx = fromEvent(document, 'mousemove').pipe(
  pluck<Event, number>('clientX'), sub(cx));                      // --> get the mouse x, subtract center from it
const dy = fromEvent(document, 'mousemove').pipe(
  pluck<Event, number>('clientY'), sub(cy));                      // --> get the mouse y, substract center from it

const D = E(Math.sqrt)(add(mul(dx, dx), mul(dy, dy)));            // --> calc distance of mouse from center
const P = add(1, div(D, Math.sqrt(cx * cx + cy * cy)).pipe(neg)); // --> calc a power based on the distance between (0, 1)

const color = rxl`rgba(255, 96, 128, ${P})`;                      // --> the background style based on that power

color.subscribe(c => document.body.style.background = c);         // --> set that style
```
> :Buttons
> > :Button label=Try It!, url=https://stackblitz.com/edit/rxmetics-sample

> :ToCPrevNext