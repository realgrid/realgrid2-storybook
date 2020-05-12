import { document } from 'global';
import { action } from '@storybook/addon-actions';
import { useEffect } from '@storybook/client-api';

import container from '../_common/container.html';
import init from '../_common/init';

export default {
  title: '98-이벤트',
};

export const 포커스 = () => {
  action('focus');

  useEffect(() => {
    init('realgrid');
    document.getElementById('realgrid').addEventListener('focusin', action('focus'));
  });

  return container;
};