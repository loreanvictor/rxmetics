import { should, expect } from 'chai'; should();

import { Subject } from 'rxjs';

import { not, truthy, and, or, eq, neq, seq, nseq, instanceOf } from '../boolean';


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
  it('should check strict equality.', () => {
    const src = new Subject();
    const res: boolean[] = [];
    eq(1)(src).subscribe(v => res.push(v));

    res.should.eql([]);
    src.next(true); res.should.eql([false]);
    src.next(1); res.should.eql([false, true]);
  });

  it('should be pipeable.', () => {
    const src = new Subject();
    const res: boolean[] = [];
    src.pipe(eq(1)).subscribe(v => res.push(v));

    res.should.eql([]);
    src.next(true); res.should.eql([false]);
    src.next(1); res.should.eql([false, true]);
  });
});


describe('neq()', () => {
  it('should check strict inequality.', () => {
    const src = new Subject();
    const res: boolean[] = [];
    neq(1)(src).subscribe(v => res.push(v));

    res.should.eql([]);
    src.next(true); res.should.eql([true]);
    src.next(1); res.should.eql([true, false]);
  });

  it('should be pipeable.', () => {
    const src = new Subject();
    const res: boolean[] = [];
    src.pipe(neq(1)).subscribe(v => res.push(v));

    res.should.eql([]);
    src.next(true); res.should.eql([true]);
    src.next(1); res.should.eql([true, false]);
  });
});


describe('seq()', () => {
  it('should check semi equality.', () => {
    const src = new Subject();
    const res: boolean[] = [];
    seq(1)(src).subscribe(v => res.push(v));

    res.should.eql([]);
    src.next(true); res.should.eql([true]);
    src.next(1); res.should.eql([true, true]);
    src.next(2); res.should.eql([true, true, false]);
  });

  it('should be pipeable.', () => {
    const src = new Subject();
    const res: boolean[] = [];
    src.pipe(seq(1)).subscribe(v => res.push(v));

    res.should.eql([]);
    src.next(true); res.should.eql([true]);
    src.next(1); res.should.eql([true, true]);
    src.next(2); res.should.eql([true, true, false]);
  });
});


describe('nseq()', () => {
  it('should check semi inequality.', () => {
    const src = new Subject();
    const res: boolean[] = [];
    nseq(1)(src).subscribe(v => res.push(v));

    res.should.eql([]);
    src.next(true); res.should.eql([false]);
    src.next(1); res.should.eql([false, false]);
    src.next(2); res.should.eql([false, false, true]);
  });

  it('should be pipeable.', () => {
    const src = new Subject();
    const res: boolean[] = [];
    src.pipe(nseq(1)).subscribe(v => res.push(v));

    res.should.eql([]);
    src.next(true); res.should.eql([false]);
    src.next(1); res.should.eql([false, false]);
    src.next(2); res.should.eql([false, false, true]);
  });
});


describe('instanceOf()', () => {
  it('should check if something is instanceof something.', () => {
    const src = new Subject();
    const res: boolean[] = [];
    class X {};
    instanceOf(X)(src).subscribe(v => res.push(v));

    res.should.eql([]);
    src.next(new X()); res.should.eql([true]);
    src.next(42); res.should.eql([true, false]);
  });

  it('should be pipeable.', () => {
    const src = new Subject();
    const res: boolean[] = [];
    class X {};
    src.pipe(instanceOf(X)).subscribe(v => res.push(v));

    res.should.eql([]);
    src.next(new X()); res.should.eql([true]);
    src.next(42); res.should.eql([true, false]);
  });
});