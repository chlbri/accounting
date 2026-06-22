import { accountPlan } from '../index';

describe('bemedev accounting uemoa', () => {
  describe('#01 => NAMES', () => {
    test('##001 => number: 10, name = "CAPITAL" ', () => {
      expect(accountPlan[10].name).toBe('CAPITAL');
    });

    test('##002 => number: 11, name = "RÉSERVES" ', () => {
      expect(accountPlan[11].name).toBe('RÉSERVES');
    });

    test('##003 => number: 12, name = "REPORT À NOUVEAU" ', () => {
      expect(accountPlan[12].name).toBe('REPORT À NOUVEAU');
    });
  });
});
