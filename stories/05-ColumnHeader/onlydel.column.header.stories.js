import { useEffect } from '@storybook/client-api';

import container from '../_common/container.html';
import init from '../_common/init';
import { renderMessage } from '../_common/utils';

export default {
  title: '05-컬럼 헤더',
};

export const 헤더체크컬럼 = () => {
  useEffect(() => {
    const { gridView } = init('realgrid');

    const checkColumn = gridView.columnByName('KorName');
    checkColumn.header.checkLocation = 'left';
    checkColumn.checked = true;
    gridView.setColumn(checkColumn);
  });

  return container;
};

export const displayText = () => {
  useEffect(() => {
    const { gridView } = init('realgrid');

    const checkColumn = gridView.columnByName('SexLabel');
    const text = checkColumn.header.displayText;
    renderMessage(`SexLabel 컬럼헤더: ${text}`);
  });

  return container;
};
