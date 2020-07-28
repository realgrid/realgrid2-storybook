import { useEffect } from '@storybook/client-api';
import { gridContainer, initDataset1 } from '../_common';

/** 컴포넌트 */
export default {
  title: '98-이벤트',
};

export const onShowEditor = () => {
  useEffect(() => {
    const { gridView, container } = initDataset1('realgrid');

    gridView.onShowEditor = (grid, index, props, attrs) => {
      if (index.column == 'KorName') {
        props.textCase = 'upper';
      }
    };

    /** 이 정도는 스냅샷이 찍혀줍니다. */
    setTimeout(() => {
      gridView.setFocus();
      gridView.showEditor();
    }, 100);
  });

  return gridContainer();
};
