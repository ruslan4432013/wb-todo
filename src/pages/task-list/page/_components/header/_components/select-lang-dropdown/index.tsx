import { MoreButton } from '@wildberries/ui-kit';
import { DropdownClickEventType } from '@wildberries/ui-kit/lib/dropdown/_types';
import { useCallback } from 'react';
import i18next from 'i18next';
import { TASK_LIST_PAGE_TRANSLATES } from '@/pages/task-list/page/_constants/translations';
import { changeLang } from '@/_utils/translate';
import { CustomOption } from './_components/custom-option';

const OPTIONS = [
  { id: '1', value: 'ru', title: 'ru' },
  { id: '2', value: 'en', title: 'en' },
];

export const SelectLangDropdown = () => {
  const handleChangeLang = useCallback(
    (itemClickEvent: DropdownClickEventType) => {
      const lang = itemClickEvent.value.value;
      if (typeof lang === 'undefined') {
        throw new Error('Language in SelectLangDropdown is undefined');
      }
      changeLang(lang);
    },
    [],
  );

  return (
    <MoreButton
      customOptionComponent={CustomOption}
      items={OPTIONS}
      onItemClick={handleChangeLang}
    >
      {i18next.t<string>(TASK_LIST_PAGE_TRANSLATES.changeLanguage)}
    </MoreButton>
  );
};
