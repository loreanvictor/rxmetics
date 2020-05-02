import { interval, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { rxl } from '../src';


rxl`hellow ${interval(500).pipe(map(x => x * 2))} world ...`.subscribe(console.log);