import { useEffect } from '@storybook/client-api';
import { gridContainer, init } from '../_common';

/** 컴포넌트 */
export default {
  title: '99-알파버전 이슈',
};

export const _1074 = () => {
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

  return gridContainer();
}