import { useService } from '@bemedev/app-solidjs';
import { Select } from '@kobalte/core/select';
import { Check, ChevronDown } from 'lucide-solid';
import service from './service';

interface LanguageOption {
  value: 'en' | 'fr' | 'es';
  label: string;
  flag: string;
}

const languages: LanguageOption[] = [
  { value: 'en', label: 'English', flag: '🇺🇸' },
  { value: 'fr', label: 'Français', flag: '🇫🇷' },
  { value: 'es', label: 'Español', flag: '🇪🇸' },
];

export const LangSwitcher = () => {
  const lang = useService(service, c => c.context);

  const selectedOption = () =>
    languages.find(l => l.value === lang()) ?? languages[0];

  const handleValueChange = (option: LanguageOption | null) => {
    if (option) {
      service.send({ type: 'SET_LANG' as any, payload: option.value });
    }
  };

  return (
    <div class='relative w-full'>
      <Select<LanguageOption>
        value={selectedOption()}
        onChange={handleValueChange}
        options={languages}
        optionValue='value'
        optionTextValue='label'
        placeholder='Select language'
        itemComponent={props => (
          <Select.Item
            item={props.item}
            class='flex items-center justify-between px-3 py-2 text-sm text-sidebar-foreground rounded-lg cursor-pointer outline-none select-none hover:bg-sidebar-accent hover:text-sidebar-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 data-focus:bg-sidebar-accent data-focus:text-sidebar-accent-foreground transition-all duration-150'
          >
            <div class='flex items-center gap-2.5'>
              <span class='text-base leading-none select-none'>
                {props.item.rawValue.flag}
              </span>
              <Select.ItemLabel class='font-medium'>
                {props.item.rawValue.label}
              </Select.ItemLabel>
            </div>
            <Select.ItemIndicator class='flex items-center justify-center text-sidebar-primary-foreground'>
              <Check class='w-4 h-4' />
            </Select.ItemIndicator>
          </Select.Item>
        )}
      >
        <Select.Trigger class='flex items-center justify-between w-full px-3.5 py-2.5 text-sm font-medium transition-all duration-300 border rounded-xl bg-sidebar-accent/20 hover:bg-sidebar-accent/50 border-sidebar-border hover:border-sidebar-foreground/20 focus:outline-none focus-visible:ring-1 focus-visible:ring-sidebar-ring disabled:cursor-not-allowed disabled:opacity-50 gap-2.5 text-sidebar-foreground/80 hover:text-sidebar-foreground group'>
          <Select.Value<LanguageOption>>
            {state => {
              const selected = state.selectedOption();
              return (
                <div class='flex items-center gap-2.5'>
                  <span class='text-base leading-none select-none'>
                    {selected?.flag}
                  </span>
                  <span class='font-semibold'>{selected?.label}</span>
                </div>
              );
            }}
          </Select.Value>
          <Select.Icon class='flex items-center text-sidebar-foreground/50 group-hover:text-sidebar-foreground transition-colors'>
            <ChevronDown class='w-4 h-4 transition-transform duration-300 group-data-expanded:rotate-180' />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content class='z-50 min-w-40 overflow-hidden rounded-xl border border-sidebar-border bg-sidebar/95 backdrop-blur-md p-1.5 text-sidebar-foreground shadow-2xl animate-in fade-in-80 slide-in-from-top-1 duration-200'>
            <Select.Listbox class='space-y-0.5 outline-none max-h-[300px] overflow-y-auto' />
          </Select.Content>
        </Select.Portal>
      </Select>
    </div>
  );
};

export default LangSwitcher;
