import { useEffect } from '@storybook/client-api';
import { action } from '@storybook/addon-actions';

import container from '../_common/container.html';
import init from '../_common/init';

/** 컴포넌트 */
export default {
  title: '98-이벤트',
};

export const onShowEditor = () => {
  useEffect(() => {
    const { gridView, container } = init('realgrid');

    gridView.onShowEditor = (grid, index, props, attrs) => {
      if (index.column == "KorName") {
        props.textCase = 'upper';
      }
    }

    /** 이 정도는 스냅샷이 찍혀줍니다. */
    setTimeout(() => {
      gridView.setFocus();
      gridView.showEditor();
    }, 100);
  });

  return container;
}