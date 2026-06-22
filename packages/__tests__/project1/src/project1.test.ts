import { accountPlan } from '@bemedev/accounting-uemoa';

describe('bemedev accounting uemoa', () => {
  describe('#01 => NAMES', () => {
    test('##001 => number: 10, name = "CAPITAL" ', () => {
      expect(accountPlan[10].name).toBe('CAPITAL');
    });
  });
});
