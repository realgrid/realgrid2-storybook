import { useEffect } from '@storybook/client-api';

import container from '../_common/container.html';
import init from '../_common/init';

export default {
  title: '99-알파버전 이슈',
};

export const _1122 = () => {
  useEffect(() => {
    const { gridView } = init('realgrid');
    setTimeout(() => {
      gridView.setHeader({ visible: false });
    }, 100);
  });

  return container;
};