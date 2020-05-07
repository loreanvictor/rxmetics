# Boolean Operations

Boolean operations allow you to conduct boolean arithmetics on observables emitting boolean values.

<br>

## Equality Checks

You can use `eq()` to check equality of multiple observables / boolean values:

```ts
/*!*/import { eq } from 'rxmetics';
import { mod } from 'rxmetics/pipes';
import { interval } from 'rxjs';


/*!*/eq(
/*!*/  interval(1000).pipe(mod(2)), 
/*!*/  interval(500).pipe(mod(2))
/*!*/).subscribe(console.log);

// Result:
// > true
// > false
// > true
// > false
```
> :Buttons
>
> > :Button label=play_arrow, icon=true, url=https://stackblitz.com/edit/rxmetics-bool-sample1
>
> > :CopyButton

You can also use `eq()` pipe instead:

```ts
/*!*/import { mod, eq } from 'rxmetics/pipes';
import { interval } from 'rxjs';


interval(1000).pipe(
  mod(2),
/*!*/  eq(interval(500).pipe(mod(2)))
) 
.subscribe(console.log);
```

You can also use `neq()` or `neq()` pipe for non-equality checks.

> [error](:Icon) **IMPORTANT**
>
> `eq()` and `neq()` conduct strict equality check, i.e. they use `===` and `!==` operators
> respectively.

<br>

## `not()`

Negates incoming boolean values:

```ts
/*!*/import { not, eq, neq } from 'rxmetics';
import { interval } from 'rxjs';

const i1 = interval(1000);
const i2 = interval(1100);

eq(
/*!*/  not(eq(i1, i2)),
  neq(i1, i2)
).subscribe(v => document.body.textContent = v);
```

> :Buttons
>
> > :Button label=play_arrow, icon=true, url=https://stackblitz.com/edit/rxmetics-bool-sample2
>
> > :CopyButton

You can use it as a pipe as well:

```ts
/*!*/import { not, eq, neq } from 'rxmetics';   // --> alternatively you can import `not` from 'rxmetics/pipes';
import { interval } from 'rxjs';

const i1 = interval(1000);
const i2 = interval(1100);

eq(
/*!*/  eq(i1, i2).pipe(not),
  neq(i1, i2)
).subscribe(v => document.body.textContent = v);
```

<br>

## `and()`

Will **AND** two (or more) booleans or observables:

```ts
/*!*/import { and } from 'rxmetics';
import { fromEvent } from 'rxjs';
import { pluck, map } from 'rxjs/operators';


/*!*/and(
/*!*/  fromEvent(document, 'mousemove')
/*!*/    .pipe(pluck('clientX'), map(x => x > window.innerWidth / 2)),
/*!*/  fromEvent(document, 'mousemove')
/*!*/    .pipe(pluck('clientY'), map(x => x > window.innerHeight / 2))
/*!*/)
.subscribe(v => {
  if (v) document.body.classList.add('active');
  else document.body.classList.remove('active');
});
```

> :Buttons
>
> > :Button label=play_arrow, icon=true, url=https://stackblitz.com/edit/rxmetics-bool-sample3
>
> > :CopyButton

You can also use the `and()` pipe instead:

```ts
/*!*/import { and } from 'rxmetics/pipes';
import { fromEvent } from 'rxjs';
import { pluck, map } from 'rxjs/operators';

fromEvent(document, 'mousemove')
.pipe(
  pluck('clientX'), map(x => x > window.innerWidth / 2),
/*!*/  and(fromEvent(document, 'mousemove')
/*!*/    .pipe(pluck('clientY'), map(x => x > window.innerHeight / 2))
  )
)
.subscribe(v => {
  if (v) document.body.classList.add('active');
  else document.body.classList.remove('active');
});
```

<br>

## `or()`

Will **AND** two (or more) booleans or observables:

```ts
/*!*/import { or } from 'rxmetics';
import { fromEvent } from 'rxjs';
import { pluck, map } from 'rxjs/operators';


/*!*/or(
/*!*/  fromEvent(document, 'mousemove')
/*!*/    .pipe(pluck('clientX'), map(x => x > window.innerWidth / 2)),
/*!*/  fromEvent(document, 'mousemove')
/*!*/    .pipe(pluck('clientY'), map(x => x > window.innerHeight / 2))
/*!*/)
.subscribe(v => {
  if (v) document.body.classList.add('active');
  else document.body.classList.remove('active');
});
```

> :Buttons
>
> > :Button label=play_arrow, icon=true, url=https://stackblitz.com/edit/rxmetics-bool-sample4
>
> > :CopyButton

You can also use the `and()` pipe instead:

```ts
/*!*/import { or } from 'rxmetics/pipes';
import { fromEvent } from 'rxjs';
import { pluck, map } from 'rxjs/operators';

fromEvent(document, 'mousemove')
.pipe(
  pluck('clientX'), map(x => x > window.innerWidth / 2),
/*!*/  or(fromEvent(document, 'mousemove')
/*!*/    .pipe(pluck('clientY'), map(x => x > window.innerHeight / 2))
  )
)
.subscribe(v => {
  if (v) document.body.classList.add('active');
  else document.body.classList.remove('active');
});
```
<br>

## `truthy()`

Checks if emitted values are [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy).
It basically applies the `!!` operator. Like `not()`, it can be used as a function or as a pipe:

```ts
import { truthy, eq } from 'rxmetics';

const a$ = ...

truthy(a$)        // --> these two are the same
a$.pipe(truthy)   // --> these two are the same
```

<br>

> :ToCPrevNext