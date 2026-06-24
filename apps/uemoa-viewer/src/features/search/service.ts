import { accounts } from '#i18n';
import { createMachine, interpret, typings } from '@bemedev/app';

const SearchMachine = createMachine(
  {
    initial: 'work',
    states: {
      work: {
        on: { SET_LANG: { actions: ['setLang'] } },
      },
    },
  },
  {
    sync: true,
    context: typings.pContext(({ litterals }) =>
      litterals(...accounts.keys),
    ),
  },
).provideOptions(({ assign }) => ({
  actions: {
    setLang: assign('context', {
      SET_LANG: ({ payload }) => payload as any,
    }),
  },
}));

const service = interpret(SearchMachine, { context: accounts.keys[0] });
export default service;
