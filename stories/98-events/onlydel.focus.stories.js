import { useEffect } from '@storybook/client-api';
import { gridContainer, renderMessage, initDataset } from '../_common';

export default {
  title: '98-이벤트',
};

export const 포커스 = () => {
  useEffect(() => {
    const { gridView, container } = initDataset(1);

    setTimeout(() => {
      gridView.setFocus();
    }, 100);

    container.addEventListener('focusin', () => {
      renderMessage('포커스 됨');
    });
  });

  return gridContainer();
};
