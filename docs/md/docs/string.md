# String Operations

String operations allow you to do string manipulation with observables.

<br>

## `concat()`

Concats two or more observables or values. The first value **MUST** be a string or an observable emitting
strings:

```ts
/*!*/import { concat } from 'rxmetics';
import { mod } from 'rxmetics/pipes';
import { interval } from 'rxjs';

/*!*/concat('', interval(1000), ' : ', interval(10).pipe(mod(100)))
.subscribe(v => document.body.textContent = v);
```

> :Buttons
>
> > :Button label=play_arrow, icon=true, url=https://stackblitz.com/edit/rxmetics-str-sample1
>
> > :CopyButton

You can also use the `concat()` pipe instead. As before, you **MUST** pipe it to an observable
emitting strings:

```ts
/*!*/import { mod, concat } from 'rxmetics/pipes';
import { interval, of } from 'rxjs';

of('').pipe(
/*!*/  concat(interval(1000), ' : '),
/*!*/  concat(interval(10).pipe(mod(100)))
).subscribe(v => document.body.textContent = v);
```

<br>

## String Templates

You can use `rxl` template prefix to use observables in your template strings:

```ts
/*!*/import { rxl } from 'rxmetics';
import { mod } from 'rxmetics/pipes';
import { interval } from 'rxjs';

/*!*/rxl`[PRECISE TIMER]:: ${interval(1000)} : ${interval(10).pipe(mod(100))}`
  .subscribe(v => document.body.textContent = v);
```

> :Buttons
>
> > :Button label=play_arrow, icon=true, url=https://stackblitz.com/edit/rxmetics-str-sample2
>
> > :CopyButton

<br>

> :ToCPrevNext