import { useEffect } from '@storybook/client-api';
import { gridContainer, initDataset1 } from '../_common';

export default {
  title: '99-알파버전 이슈',
};

export const _1122 = () => {
  useEffect(() => {
    initDataset1('realgrid');

    setTimeout(({ gridView }) => {
      // 이건 너무 복잡하지?
      gridView.setHeader({ visible: false });
    }, 100);
  });

  return gridContainer();
};
