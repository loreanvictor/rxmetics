import { should, expect } from 'chai'; should();

import { Subject } from 'rxjs';

import { add, sub, mul, div, neg, inv } from '../number';


describe('neg()', () => {
  it('should return the negative of given value.', done => {
    const src = new Subject<number>();
    neg(src).subscribe(v => {
      v.should.equal(-42);
      done();
    });

    src.next(42);
  });

  it('should be pipeable.', done => {
    const src = new Subject<number>();
    src.pipe(neg).subscribe(v => {
      v.should.equal(-42);
      done();
    });

    src.next(42);
  });
});


describe('inv()', () => {
  it('should return the invert of given value.', done => {
    const src = new Subject<number>();
    inv(src).subscribe(v => {
      v.should.equal(1/42);
      done();
    });

    src.next(42);
  });

  it('should be pipeable.', done => {
    const src = new Subject<number>();
    src.pipe(inv).subscribe(v => {
      v.should.equal(1/42);
      done();
    });

    src.next(42);
  });
});


describe('add()', () => {
  it('should add given value/observables.', () => {
    const src = new Subject<number>();
    const res: number[] = [];
    add(src, 15).subscribe(v => res.push(v));

    res.should.eql([]);
    src.next(10); res.should.eql([25]);
    src.next(-15); res.should.eql([25, 0]);
  });

  it('should also work for three values.', () => {
    const a = new Subject<number>();
    const b = new Subject<number>();
    const res: number[] = [];
    add(a, 15, b).subscribe(v => res.push(v));

    res.should.eql([]);
    a.next(7); res.should.eql([]);
    b.next(8); res.should.eql([30]);
    a.next(10); res.should.eql([30, 33]);
  });

  it('should also work for more than three values.', () => {
    const a = new Subject<number>();
    const b = new Subject<number>();
    const c = new Subject<number>();
    const res: number[] = [];
    add(a, 15, b, c).subscribe(v => res.push(v));

    res.should.eql([]);
    a.next(7); res.should.eql([]);
    b.next(8); res.should.eql([]);
    c.next(0); res.should.eql([30]);
    a.next(-10); res.should.eql([30, 13]);
  });
});


describe('sub()', () => {
  it('should subtract given value/observables.', () => {
    const src = new Subject<number>();
    const res: number[] = [];
    sub(src, 15).subscribe(v => res.push(v));

    res.should.eql([]);
    src.next(20); res.should.eql([5]);
    src.next(-15); res.should.eql([5, -30]);
  });

  it('should also work for three values.', () => {
    const a = new Subject<number>();
    const b = new Subject<number>();
    const res: number[] = [];
    sub(a, 15, b).subscribe(v => res.push(v));

    res.should.eql([]);
    a.next(23); res.should.eql([]);
    b.next(2); res.should.eql([6]);
    a.next(30); res.should.eql([6, 13]);
  });

  it('should also work for more than three values.', () => {
    const a = new Subject<number>();
    const b = new Subject<number>();
    const c = new Subject<number>();
    const res: number[] = [];
    sub(a, 15, b, c).subscribe(v => res.push(v));

    res.should.eql([]);
    a.next(23); res.should.eql([]);
    b.next(2); res.should.eql([]);
    c.next(1); res.should.eql([5]);
    a.next(0); res.should.eql([5, -18]);
  });
});


describe('mul()', () => {
  it('should multiply given value/observables.', () => {
    const src = new Subject<number>();
    const res: number[] = [];
    mul(src, 3).subscribe(v => res.push(v));

    res.should.eql([]);
    src.next(20); res.should.eql([60]);
    src.next(-15); res.should.eql([60, -45]);
  });

  it('should also work for three values.', () => {
    const a = new Subject<number>();
    const b = new Subject<number>();
    const res: number[] = [];
    mul(a, 3, b).subscribe(v => res.push(v));

    res.should.eql([]);
    a.next(2); res.should.eql([]);
    b.next(3); res.should.eql([18]);
    a.next(10); res.should.eql([18, 90]);
  });

  it('should also work for more than three values.', () => {
    const a = new Subject<number>();
    const b = new Subject<number>();
    const c = new Subject<number>();
    const res: number[] = [];
    mul(a, 2, b, c).subscribe(v => res.push(v));

    res.should.eql([]);
    a.next(5); res.should.eql([]);
    b.next(2); res.should.eql([]);
    c.next(1); res.should.eql([20]);
    a.next(0); res.should.eql([20, 0]);
  });
});


describe('div()', () => {
  it('should multiply given value/observables.', () => {
    const src = new Subject<number>();
    const res: number[] = [];
    div(src, 3).subscribe(v => res.push(v));

    res.should.eql([]);
    src.next(6); res.should.eql([2]);
    src.next(-15); res.should.eql([2, -5]);
  });

  it('should also work for three values.', () => {
    const a = new Subject<number>();
    const b = new Subject<number>();
    const res: number[] = [];
    div(a, 3, b).subscribe(v => res.push(v));

    res.should.eql([]);
    a.next(9); res.should.eql([]);
    b.next(3); res.should.eql([1]);
    a.next(18); res.should.eql([1, 2]);
  });

  it('should also work for more than three values.', () => {
    const a = new Subject<number>();
    const b = new Subject<number>();
    const c = new Subject<number>();
    const res: number[] = [];
    div(a, 2, b, c).subscribe(v => res.push(v));

    res.should.eql([]);
    a.next(36); res.should.eql([]);
    b.next(3); res.should.eql([]);
    c.next(2); res.should.eql([3]);
    a.next(0); res.should.eql([3, 0]);
  });
});