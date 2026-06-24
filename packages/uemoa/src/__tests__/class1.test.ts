import { accountPlan } from '../index';

describe('bemedev accounting uemoa', () => {
  describe('#01 => NAMES', () => {
    test('##001 => number: 10, name = "CAPITAL" ', () => {
      expect(accountPlan[10]).toBe('CAPITAL');
    });

    test('##002 => number: 11, name = "RESERVES" ', () => {
      expect(accountPlan[11]).toBe('RESERVES');
    });

    test('##003 => number: 12, name = "RETAINED EARNINGS" ', () => {
      expect(accountPlan[12]).toBe('RETAINED EARNINGS');
    });
  });
});
