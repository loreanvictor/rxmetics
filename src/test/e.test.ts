import { should, expect } from 'chai'; should();

import { Subject } from 'rxjs';

import { E, normalize } from '../e';


describe('normalize()', () => {
  it('should turn a value into an observable which gives that value back.', done => {
    normalize(42).subscribe(x => {
      x.should.equal(42);
      done();
    });
  });

  it('should return the observable itself if given an observable.', () => {
    const ref = new Subject();
    normalize(ref).should.equal(ref);
  });
});


describe('E()', () => {
  it('should turn a given function to a function working with observables.', () => {
    const a = new Subject<number>();
    const b = new Subject<number>();
    const f = (a: number, b: number, c: number) => (2 * b - a) / c;
    const f$ = E(f);

    const res: number[] = [];
    f$(a, 42, b).subscribe(x => res.push(x));

    a.next(1); res.should.eql([]);
    b.next(2); res.should.eql([41.5]);
    a.next(10); res.should.eql([41.5, 37]);
    b.next(20); res.should.eql([41.5, 37, 3.7]);
  });

  it('should work like a pipe for single argument functions.', done => {
    const a = new Subject<string>();
    a.pipe(E((x: string) => 'hellow ' + x)).subscribe(res => {
      res.should.equal('hellow world');
      done();
    });

    a.next('world');
  });
});
