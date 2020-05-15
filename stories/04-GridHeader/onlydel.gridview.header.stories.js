import { useEffect } from '@storybook/client-api';
import { gridContainer, init, renderMessage } from '../_common';

export default {
  title: '04-Gridheader',
};

export const 헤더감추기 = () => {
  useEffect(() => {
    const { gridView } = init('realgrid');

    gridView.setHeader({ visible: false });
  });

  return gridContainer();
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

  return gridContainer();
};

export const 헤더속성_기본값 = () => {
  useEffect(() => {
    const { gridView } = init('realgrid');

    setTimeout(() => {
      const header = gridView.getHeader();
      renderMessage(JSON.stringify(header));
    }, 100);
  });

  return gridContainer();
};
