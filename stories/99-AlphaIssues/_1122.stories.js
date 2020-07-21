import { useEffect } from '@storybook/client-api';
import { gridContainer, init } from '../_common';

export default {
  title: '99-알파버전 이슈',
};

export const _1122 = () => {
  useEffect(() => {
    init(
      'realgrid',
      ({ gridView }) => {
        // 이건 너무 복잡하지?
        gridView.setHeader({ visible: false });
      },
      100
    );
  });

  return gridContainer();
};
