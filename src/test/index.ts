import { pipes } from '../index';
import * as packed from '../pipes';


describe('rxmetics', () => {
  require('./e.test');
  require('./boolean.test');
  require('./number.test');
  require('./string.test');

  require('../pipes/test');

  describe('.pipes', () => {
    it('should include all functions from pipes submodule.', () => {
      Object.keys(pipes).forEach(key => {
        (packed as any)[key].should.equal((pipes as any)[key]);
      });

      Object.keys(packed).forEach(key => {
        (packed as any)[key].should.equal((pipes as any)[key]);
      });
    });
  });
})