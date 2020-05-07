# Numeric Operations

Numeric operations allow you to do numeric arithmetic on observables.

<br>

## `mod()`

Calculates the modulo of two (or more) observables or numbers:

```ts
/*!*/import { mod } from 'rxmetics';
import { interval } from 'rxjs';

/*!*/mod(interval(1000), 4).subscribe(console.log);

// Result:
// > 0, 1, 2, 3, 0, 1, 2, 3, ...
```
> :Buttons
>
> > :Button label=play_arrow, icon=true, url=https://stackblitz.com/edit/rxmetics-num-sample1
>
> > :CopyButton

You can also use the `mod()` pipe instead:

```ts
/*!*/import { mod } from 'rxmetics/pipes';
import { interval } from 'rxjs';

/*!*/interval(1000).pipe(mod(4)).subscribe(console.log);

// Result:
// > 0, 1, 2, 3, 0, 1, 2, 3, ...
```

<br>

## `add()`

Adds two (or more) observables or numbers:

```ts
/*!*/import { add } from 'rxmetics';
import { mod } from 'rxmetics/pipes';
import { interval } from 'rxjs';

/*!*/add(interval(1000), interval(300).pipe(mod(3)), 10).subscribe(console.log);

// Result:
// > 12, 10, 11, 12, 13, 11, 12, 13, 14, ...
```

> :Buttons
>
> > :Button label=play_arrow, icon=true, url=https://stackblitz.com/edit/rxmetics-num-sample2
>
> > :CopyButton

You can also use the `add()` pipe instead:

```ts
/*!*/import { add, mod } from 'rxmetics/pipes';
import { interval } from 'rxjs';

/*!*/interval(1000).pipe(
/*!*/  add(interval(300).pipe(mod(3)), 10),
/*!*/  add(1000),
/*!*/).subscribe(console.log);

// Result:
// > 1012, 1010, 1011, 1012, 1013, 1011, 1012, 1013, 1014, ...
```

<br>

## `sub()`

Subtracts two (or more) observables or numbers:

```ts
/*!*/import { sub } from 'rxmetics';
import { fromEvent } from 'rxjs';
import { pluck } from 'rxjs/operators';

const mx = fromEvent(document, 'mousemove').pipe(pluck('clientX'));
/*!*/sub(mx, window.innerWidth / 2).subscribe(v => document.body.textContent = v);
```

> :Buttons
>
> > :Button label=play_arrow, icon=true, url=https://stackblitz.com/edit/rxmetics-num-sample3?file=index.ts
>
> > :CopyButton

You can also use `sub()` pipe instead:

```ts
/*!*/import { sub } from 'rxmetics/pipes';
import { fromEvent } from 'rxjs';
import { pluck } from 'rxjs/operators';

const mx = fromEvent(document, 'mousemove').pipe(
  pluck('clientX'),
/*!*/  sub(window.innerWidth / 2)
).subscribe(v => document.textContent = v);
```

<br>

## `mul()`

Multiplies two (or more) observables or numbers:

```ts
/*!*/import { mul } from 'rxmetics';
import { sub } from 'rxmetics/pipes';
import { fromEvent } from 'rxjs';
import { pluck } from 'rxjs/operators';

const dx = fromEvent(document, 'mousemove').pipe(
  pluck('clientX'),
  sub(window.innerWidth / 2)
);

/*!*/mul(dx, dx).subscribe(v => document.body.textContent = v);
```
> :Buttons
>
> > :Button label=play_arrow, icon=true, url=https://stackblitz.com/edit/rxmetics-num-sample4?file=index.ts
>
> > :CopyButton

You can also use the `mul()` pipe instead:

```ts
/*!*/import { mul, sub } from 'rxmetics';
import { fromEvent } from 'rxjs';
import { pluck } from 'rxjs/operators';

const dx = fromEvent(document, 'mousemove').pipe(
  pluck('clientX'),
  sub(window.innerWidth / 2)
);

/*!*/dx.pipe(mul(dx)).subscribe(v => document.body.textContent = v);
```

<br>

## `div()`

Divides two (or more) observables or numbers:

```ts
/*!*/import { div } from 'rxmetics';
import { sub, mul } from 'rxmetics/pipes';
import { fromEvent } from 'rxjs';
import { pluck } from 'rxjs/operators';

const dx = fromEvent(document, 'mousemove').pipe(
  pluck('clientX'),
  sub(window.innerWidth / 2)
);

const dx2 = dx.pipe(mul(dx));
/*!*/div(dx2, window.innerWidth * window.innerWidth / 4)
  .subscribe(v => document.body.textContent = v);
```
> :Buttons
>
> > :Button label=play_arrow, icon=true, url=https://stackblitz.com/edit/rxmetics-num-sample5
>
> > :CopyButton

You can also use the `div()` pipe instead:

```ts
/*!*/import { sub, mul, div } from 'rxmetics/pipes';
import { fromEvent } from 'rxjs';
import { pluck } from 'rxjs/operators';

const dx = fromEvent(document, 'mousemove').pipe(
  pluck('clientX'),
  sub(window.innerWidth / 2)
);

/*!*/dx.pipe(
  mul(dx),
  div(window.innerWidth * window.innerWidth / 4),
).subscribe(v => document.body.textContent = v);
```

<br>

## `neg()`

Returns negative of incoming numbers:

```ts
/*!*/ import { neg } from 'rxmetics';
import { interval } from 'rxjs';

/*!*/neg(interval(1000)).subscribe(console.log);

// Result:
// > -1, -2, -3, ...
```

Can also be used as a pipe:

```ts
/*!*/ import { neg } from 'rxmetics';      // --> or import it from 'rxmetics/pipes', doesn't matter.
import { interval } from 'rxjs';

/*!*/interval(1000).pipe(neg).subscribe(console.log);

// Result:
// > -1, -2, -3, ...
```

<br>

## `inv()`

Inverts incoming numbers:

```ts
/*!*/ import { inv } from 'rxmetics';
import { add } from 'rxmetics/pipes';
import { interval } from 'rxjs';

/*!*/inv(interval(1000).pipe(add(1))).subscribe(console.log);

// Result:
// > 1, 0.5, 0.333333333, 0.25, 0.2, ...
```

Can also be used as a pipe:

```ts
/*!*/ import { inv } from 'rxmetics';      // --> or import it from 'rxmetics/pipes', doesn't matter.
import { add } from 'rxmetics/pipes';
import { interval } from 'rxjs';

/*!*/interval(1000).pipe(add(1), inv).subscribe(console.log);

// Result:
// > 1, 0.5, 0.333333333, 0.25, 0.2, ...
```

<br>

> :ToCPrevNext