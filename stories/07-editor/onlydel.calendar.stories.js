import { useEffect } from '@storybook/client-api';
import { gridContainer, init, renderMessage } from '../_common';

export default {
  title: '07-편집기',
};

export const 달력팝업 = () => {
  useEffect(() => {
    const { gridView } = init('realgrid');

    setTimeout(() => {
      gridView.setCurrent({
        dataRow: 1,
        column: 'StartDate',
      });
      gridView.showEditor({ dropdown: true });
    }, 200);
  });

  return gridContainer();
};
