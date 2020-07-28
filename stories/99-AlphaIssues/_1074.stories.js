import { useEffect } from '@storybook/client-api';
import { gridContainer, initDataset1 } from '../_common';

/** 컴포넌트 */
export default {
  title: '99-알파버전 이슈',
};

export const _1074 = () => {
  useEffect(() => {
    const { gridView } = initDataset1('realgrid');

    setTimeout(() => {
      gridView.setFocus();
      gridView.showEditor();
    }, 100);

    gridView.onShowEditor = (grid, index, props, attrs) => {
      if (index.column == 'KorName') {
        props.textCase = 'upper';
      }
    };
  });

  return gridContainer();
};
