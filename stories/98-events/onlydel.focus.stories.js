import { useEffect } from '@storybook/client-api';
import { gridContainer, init, renderMessage } from '../_common';

export default {
  title: '98-이벤트',
};

export const 포커스 = () => {
  useEffect(() => {
    const { gridView, container } = init('realgrid');
    container.addEventListener('focusin', () => {
      renderMessage('포커스 됨');
    });

    setTimeout(() => {
      gridView.setFocus();
    }, 100);
  });

  return gridContainer();
};