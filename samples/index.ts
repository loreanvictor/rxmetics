import { interval } from 'rxjs';
import { rxl, mul } from '../src';


rxl`hellow ${mul(interval(500), 2)} world ...`.subscribe(console.log);