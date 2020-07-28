import { useEffect } from '@storybook/client-api';
import { gridContainer, initDataset, renderMessage } from '../_common';

export default {
  title: '03-Selection',
};

export const setSelectionBlock = () => {
  useEffect(() => {
    const { gridView, container } = initDataset(1);
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

  return gridContainer();
};

export const setSelectionColumns = () => {
  useEffect(() => {
    const { gridView, container } = initDataset(1);
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

  return gridContainer();
};
