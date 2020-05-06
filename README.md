![banner](banner.svg)

## _Arithmetics for RxJS observables._

[![Build Status](https://badgen.net/travis/loreanvictor/rxmetics?label=build&cache=300&icon=travis)](https://travis-ci.org/loreanvictor/rxmetics)
[![Code Coverage](https://badgen.net/codecov/c/github/loreanvictor/rxmetics?cache=300&icon=codecov)](https://codecov.io/gh/loreanvictor/rxmetics)
[![NPM Version](https://badgen.net/npm/v/rxmetics?cache=300&icon=npm)](https://www.npmjs.com/package/rxmetics)
[![License](https://badgen.net/github/license/loreanvictor/rxmetics?icon=github)](LICENSE)

```bash
npm i rxmetics
```

This is a minimal RxJS library for lazy people. Instead of this:

```ts
import { combineLatest, ... } from 'rxjs';
import { map, ... } from 'rxjs/operators';

// ...

combineLatest(a, b).pipe(map(([a, b]) => a + b))...
```

You can do this:

```ts
import { add } from 'rxmetics';

// ...

add(a, b)...
```

Or this:

```ts
import { add } from 'rxmetics/pipes';

// ...

a.pipe(add(b))...
```

But its not just for numbers (its RxJS arithmetic**s**):

```ts
import { and, eq } from 'rxmetics';

// ...

and(a.pipe(eq(32)), b.pipe(eq('halo')))...
```

```ts
import { rxl } from 'rxmetics';
import { interval } from 'rxjs';

// ...

rxl`hellow ${interval(1000)}`.subscribe(console.log);

// RESULT:
// > hellow
// > hellow 1
// > hellow 2
// > hellow 3
// ...
```
