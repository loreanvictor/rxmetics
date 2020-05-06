import { should, expect } from 'chai'; should();

import { Subject } from 'rxjs';

import { concat } from '../string';


describe('concat()', () => {
  it('should make `concat()` pipeable.', () => {
    const src = new Subject<string>();
    const off = new Subject();
    const res: string[] = [];
    src.pipe(concat(off, '!')).subscribe(v => res.push(v));

    res.should.eql([]);
    src.next('hellow '); res.should.eql([]);
    off.next(42); res.should.eql(['hellow 42!']);
    off.next(false); res.should.eql(['hellow 42!', 'hellow false!']);
  });
});