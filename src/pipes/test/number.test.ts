import { should, expect } from 'chai'; should();

import { Subject } from 'rxjs';

import { add, sub, mul, div, mod } from '../number';


describe('add()', () => {
  it('should make `add()` pipeable.', () => {
    const src = new Subject<number>();
    const off = new Subject<number>();
    const res: number[] = [];
    src.pipe(add(off, 42)).subscribe(v => res.push(v));

    res.should.eql([]);
    src.next(10); res.should.eql([]);
    off.next(-8); res.should.eql([44]);
    off.next(0); res.should.eql([44, 52]);
  });
});


describe('sub()', () => {
  it('should make `sub()` pipeable.', () => {
    const src = new Subject<number>();
    const off = new Subject<number>();
    const res: number[] = [];
    src.pipe(sub(off, 5)).subscribe(v => res.push(v));

    res.should.eql([]);
    src.next(42); res.should.eql([]);
    off.next(12); res.should.eql([25]);
    off.next(-1); res.should.eql([25, 38]);
  });
});



describe('mul()', () => {
  it('should make `mul()` pipeable.', () => {
    const src = new Subject<number>();
    const off = new Subject<number>();
    const res: number[] = [];
    src.pipe(mul(off, 7)).subscribe(v => res.push(v));

    res.should.eql([]);
    src.next(10); res.should.eql([]);
    off.next(-3); res.should.eql([-210]);
    off.next(0); res.should.eql([-210, 0]);
  });
});


describe('div()', () => {
  it('should make `div()` pipeable.', () => {
    const src = new Subject<number>();
    const off = new Subject<number>();
    const res: number[] = [];
    src.pipe(div(off, 5)).subscribe(v => res.push(v));

    res.should.eql([]);
    src.next(120); res.should.eql([]);
    off.next(3); res.should.eql([8]);
    off.next(-1); res.should.eql([8, -24]);
  });
});


describe('mod()', () => {
  it('should make `mod()` pipeable.', () => {
    const src = new Subject<number>();
    const off = new Subject<number>();
    const res: number[] = [];
    src.pipe(mod(off, 3)).subscribe(v => res.push(v));

    res.should.eql([]);
    src.next(12); res.should.eql([]);
    off.next(10); res.should.eql([2]);
    off.next(11); res.should.eql([2, 1]);
  });
});
