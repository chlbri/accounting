import { accounts } from '#i18n';
import { createMachine, interpret, typings } from '@bemedev/app';

const SearchMachine = createMachine(
  { on: { SET_LANG: { actions: ['setLang'] } } },
  {
    sync: true,
    context: typings.pContext(({ litterals }) =>
      litterals(...accounts.keys),
    ),
    eventsMap: typings.eventsMap({
      SET_LANG: 'string',
    }),
  },
).provideOptions(({ assign }) => ({
  actions: {
    setLang: assign('context', {
      SET_LANG: ({ payload }) => payload as any,
    }),
  },
}));

const service = interpret(SearchMachine, { context: 'fr' });
export default service;
