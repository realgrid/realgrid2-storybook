import { useEffect } from '@storybook/client-api';
import { init, gridContainer, renderMessage } from '../_common';

export default {
  title: '11-test',
};

export const 한글테스트 = () => {
  useEffect(() => {
    const { gridView } = init('realgrid');
    renderMessage('test');
    renderMessage('test');
    renderMessage('test');
    renderMessage('test');
    renderMessage('test');
  });

  return gridContainer();
};
