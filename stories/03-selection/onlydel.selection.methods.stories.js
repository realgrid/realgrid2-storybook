import { useEffect } from '@storybook/client-api';

import container from '../_common/container.html';
import init from '../_common/init';
import { renderMessage } from '../_common/utils';

export default {
  title: '03-Selection',
};

export const setSelectionBlock = () => {
  useEffect(() => {
    const { gridView, container } = init('realgrid');
    let sel = {
      style: 'block',
      startItem: 2,
      startRow: 2,
      endItem: 3,
      endRow: 3,
    };

    setTimeout(() => {
      gridView.setSelection(sel);
    }, 100);
  });


  return container;
};

export const setSelectionColumns = () => {
  useEffect(() => {
    const { gridView, container } = init('realgrid');
    let sel = {
      style: 'columns',
      startItem: 2,
      startRow: 2,
      startColumn: 'korName',
      endColumn: 'korName',
      endItem: 3,
      endRow: 3,
    };

    setTimeout(() => {
      /** 오류 메시지를 화면에 뿌리는 방법 */
      try {
        gridView.setSelection(sel);
      } catch (e) {
        renderMessage(e);
      }
    }, 100);
  });


  return container;
};