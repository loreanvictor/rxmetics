import { should, expect } from 'chai'; should();

import { Subject } from 'rxjs';

import { not, truthy, and, or, eq, neq } from '../boolean';


describe('not()', () => {
  it('should negate the value of given observable.', done => {
    const src = new Subject<boolean>();
    not(src).subscribe(val => {
      val.should.be.true;
      done();
    });

    src.next(false);
  });

  it('should be pipeable.', done => {
    const src = new Subject<boolean>();
    src.pipe(not).subscribe(val => {
      val.should.be.false;
      done();
    });

    src.next(true);
  });
});


describe('truthy()', () => {
  it('should return truth-value of incoming values.', done => {
    const src = new Subject();
    truthy(src).subscribe(val => {
      val.should.be.false;
      done();
    });

    src.next(null);
  });

  it('should be pipeable.', done => {
    const src = new Subject();
    src.pipe(truthy).subscribe(val => {
      val.should.be.true;
      done();
    });

    src.next(42);
  });
});


describe('and()', () => {
  it('should `and` given observables / values.', () => {
    const src = new Subject<boolean>();
    const res: boolean[] = [];
    and(src, true).subscribe(v => res.push(v));

    res.should.eql([]);
    src.next(false); res.should.eql([false]);
    src.next(true); res.should.eql([false, true]);
  });

  it('should work for 3 observables as well.', () => {
    const a = new Subject<boolean>();
    const b = new Subject<boolean>();
    const res: boolean[] = [];
    and(a, true, b).subscribe(v => res.push(v));

    a.next(false); res.should.eql([]);
    b.next(true); res.should.eql([false]);
    a.next(true); res.should.eql([false, true]);
  });

  it('should work with more than 3 values as well.', () => {
    const a = new Subject<boolean>();
    const b = new Subject<boolean>();
    const c = new Subject<boolean>();
    const res: boolean[] = [];
    and(a, true, b, c).subscribe(v => res.push(v));

    a.next(false); res.should.eql([]);
    b.next(true); res.should.eql([]);
    c.next(true); res.should.eql([false]);
    a.next(true); res.should.eql([false, true]);
  });
});


describe('or()', () => {
  it('should `or` given observables / values.', () => {
    const src = new Subject<boolean>();
    const res: boolean[] = [];
    or(src, false).subscribe(v => res.push(v));

    res.should.eql([]);
    src.next(false); res.should.eql([false]);
    src.next(true); res.should.eql([false, true]);
  });

  it('should work for 3 observables as well.', () => {
    const a = new Subject<boolean>();
    const b = new Subject<boolean>();
    const res: boolean[] = [];
    or(a, false, b).subscribe(v => res.push(v));

    a.next(false); res.should.eql([]);
    b.next(false); res.should.eql([false]);
    a.next(true); res.should.eql([false, true]);
  });

  it('should work with more than 3 values as well.', () => {
    const a = new Subject<boolean>();
    const b = new Subject<boolean>();
    const c = new Subject<boolean>();
    const res: boolean[] = [];
    or(a, false, b, c).subscribe(v => res.push(v));

    a.next(false); res.should.eql([]);
    b.next(false); res.should.eql([]);
    c.next(false); res.should.eql([false]);
    a.next(true); res.should.eql([false, true]);
  });
});


describe('eq()', () => {
  it('should check equality of given observables / values.', () => {
    const src = new Subject();
    const res: boolean[] = [];
    eq(src, 42).subscribe(v => res.push(v));

    res.should.eql([]);
    src.next(43); res.should.eql([false]);
    src.next(42); res.should.eql([false, true]);
  });

  it('should work for 3 observables as well.', () => {
    const a = new Subject();
    const b = new Subject();
    const res: boolean[] = [];
    eq(a, true, b).subscribe(v => res.push(v));

    a.next(1); res.should.eql([]);
    b.next(true); res.should.eql([false]);
    a.next(true); res.should.eql([false, true]);
  });

  it('should work with more than 3 values as well.', () => {
    const a = new Subject();
    const b = new Subject();
    const c = new Subject();
    const res: boolean[] = [];
    eq(a, 'halo', b, c).subscribe(v => res.push(v));

    a.next('hallo'); res.should.eql([]);
    b.next('halo'); res.should.eql([]);
    c.next('halo'); res.should.eql([false]);
    a.next('halo'); res.should.eql([false, true]);
  });
});


describe('neq()', () => {
  it('should check inequality of given observables / values.', () => {
    const src = new Subject();
    const res: boolean[] = [];
    neq(src, 42).subscribe(v => res.push(v));

    res.should.eql([]);
    src.next(43); res.should.eql([true]);
    src.next(42); res.should.eql([true, false]);
  });

  it('should work for 3 observables as well.', () => {
    const a = new Subject();
    const b = new Subject();
    const res: boolean[] = [];
    neq(a, true, b).subscribe(v => res.push(v));

    a.next(1); res.should.eql([]);
    b.next(true); res.should.eql([true]);
    a.next(true); res.should.eql([true, false]);
  });

  it('should work with more than 3 values as well.', () => {
    const a = new Subject();
    const b = new Subject();
    const c = new Subject();
    const res: boolean[] = [];
    neq(a, 'halo', b, c).subscribe(v => res.push(v));

    a.next('hallo'); res.should.eql([]);
    b.next('halo'); res.should.eql([]);
    c.next('halo'); res.should.eql([true]);
    a.next('halo'); res.should.eql([true, false]);
  });
});
