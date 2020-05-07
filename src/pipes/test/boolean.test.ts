import { should, expect } from 'chai'; should();

import { Subject } from 'rxjs';

import { and, or, eq, neq } from '../boolean';


describe('and()', () => {
  it('should make `and()` pipeable.', () => {
    const src = new Subject<boolean>();
    const off = new Subject<boolean>();
    const res: boolean[] = [];
    src.pipe(and(off, true)).subscribe(v => res.push(v));

    res.should.eql([]);
    src.next(true); res.should.eql([]);
    off.next(false); res.should.eql([false]);
    off.next(true); res.should.eql([false, true]);
  });
});


describe('or()', () => {
  it('should make `or()` pipeable.', () => {
    const src = new Subject<boolean>();
    const off = new Subject<boolean>();
    const res: boolean[] = [];
    src.pipe(or(off, false)).subscribe(v => res.push(v));

    res.should.eql([]);
    src.next(false); res.should.eql([]);
    off.next(false); res.should.eql([false]);
    off.next(true); res.should.eql([false, true]);
  });
});


describe('eq()', () => {
  it('should make `eq()` pipeable.', () => {
    const src = new Subject();
    const off = new Subject();
    const res: boolean[] = [];
    src.pipe(eq(off, 42)).subscribe(v => res.push(v));

    res.should.eql([]);
    src.next(42); res.should.eql([]);
    off.next(43); res.should.eql([false]);
    off.next(42); res.should.eql([false, true]);
  });
});


describe('neq()', () => {
  it('should make `neq()` pipeable.', () => {
    const src = new Subject();
    const off = new Subject();
    const res: boolean[] = [];
    src.pipe(neq(off, 42)).subscribe(v => res.push(v));

    res.should.eql([]);
    src.next(42); res.should.eql([]);
    off.next(43); res.should.eql([true]);
    off.next(42); res.should.eql([true, false]);
  });
});