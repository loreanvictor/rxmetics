import { should, expect } from 'chai'; should();

import { Subject } from 'rxjs';

import { concat, rxl } from '../string';


describe('concat()', () => {
  it('should concat given observable / strings / values.', () => {
    const src = new Subject<string>();
    const res: string[] = [];
    concat(src, '!').subscribe(v => res.push(v));

    res.should.eql([]);
    src.next('hellow'); res.should.eql(['hellow!']);
    src.next('hi'); res.should.eql(['hellow!', 'hi!']);
  });

  it('should properly work for three values as well.', () => {
    const a = new Subject<string>();
    const b = new Subject();
    const res: string[] = [];
    concat(a, ':', b).subscribe(v => res.push(v));

    res.should.eql([]);
    a.next('X'); res.should.eql([]);
    b.next(42); res.should.eql(['X:42']);
    b.next(false); res.should.eql(['X:42', 'X:false']);
  });

  it('should properly work for more than three values as well.', () => {
    const a = new Subject();
    const b = new Subject();
    const c = new Subject();
    const res: string[] = [];
    concat('hellow ', a, '! ', b, ' says ', c).subscribe(v => res.push(v));

    res.should.eql([]);
    a.next('john'); res.should.eql([]);
    b.next(42); res.should.eql([]);
    c.next(false); res.should.eql(['hellow john! 42 says false']);
    b.next('jafar'); res.should.eql(['hellow john! 42 says false', 'hellow john! jafar says false']);
    
  });
});


describe('rxl()', () => {
  it('should allow for template strings of observables and values.', done => {
    const a = new Subject();
    const b = new Subject();
    rxl`A:: ${a}, ${42} seconds later, B:: ${b}`.subscribe(v => {
      v.should.equal('A:: jack, 42 seconds later, B:: false');
      done();
    });

    a.next('jack');
    b.next(false);
  });

  it('should work properly for a single observable value as well.', done => {
    const src = new Subject();
    rxl`Value = ${src}`.subscribe(v => {
      v.should.equal('Value = 42');
      done();
    });

    src.next(42);
  });

  it('should ommit null and undefined values.', done => {
    const src = new Subject();
    rxl`Value = ${src} | ${undefined}`.subscribe(v => {
      v.should.equal('Value =  | ');
      done();
    });

    src.next(null);
  });
});