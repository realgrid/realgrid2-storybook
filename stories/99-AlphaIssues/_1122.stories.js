import { useEffect } from '@storybook/client-api';
import { gridContainer, initDataset } from '../_common';

export default {
  title: '99-알파버전 이슈',
};

export const _1122 = () => {
  useEffect(() => {
    const { gridView } = initDataset(1);

    setTimeout(() => {
      // 이건 너무 복잡하지?
      gridView.setHeader({ visible: false });
    }, 100);
  });

  return gridContainer();
};
