import { useEffect } from '@storybook/client-api';

import container from '../_common/container.html';
import init from '../_common/init';
import { renderMessage } from '../_common/utils';

export default {
  title: '04-그리드 헤더',
};

export const 헤더감추기 = () => {
  useEffect(() => {
    const { gridView } = init('realgrid');

    gridView.setHeader({ visible: false });
  });

  return container;
};

/** header.height 가 정확히 60인지 확인 하는 방법 */
export const 헤더높이_60 = () => {
  useEffect(() => {
    const { gridView } = init('realgrid');

    gridView.setHeader({ height: 60 });

    setTimeout(() => {
      const header = gridView.getHeader();
      renderMessage(header.height === 60 ? '헤더높이 60 맞네' : new Error('헤더높이 60 아닌데'));
    }, 100);
  });

  return container;
};

export const 헤더속성_기본값 = () => {
  useEffect(() => {
    const { gridView } = init('realgrid');

    setTimeout(() => {
      const header = gridView.getHeader();
      renderMessage(JSON.stringify(header));
    }, 100);
  });

  return container;
};
