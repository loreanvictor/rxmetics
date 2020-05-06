import { should, expect } from 'chai'; should();

import { Subject } from 'rxjs';

import { and, or } from '../boolean';


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