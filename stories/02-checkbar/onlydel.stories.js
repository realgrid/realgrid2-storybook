import { document } from 'global';
import { action } from '@storybook/addon-actions';
import { useEffect } from '@storybook/client-api';

import container from '../_common/container.html';
import init from '../_common/init';

export default {
  title: '02-체크바',
};

export const 체크바보이기 = () => {
  useEffect(() => {
    init('realgrid');
  });

  return container;
};

export const 체크바_넓이40 = () => {
  useEffect(() => {
    const { gridView } = init('realgrid');
    gridView.checkBar.width = 40;
  });

  return container;
};

export const 체크바감추기 = () => {
  useEffect(() => {
    const { gridView } = init('realgrid');
    gridView.checkBar.visible = false;
  });

  return container;
};

export const 체크바_모두체크감추기 = () => {
  useEffect(() => {
    const { gridView } = init('realgrid');
    gridView.checkBar.showAll = false;
  });

  return container;
};

export const checkAll = () => {
  useEffect(() => {
    const { gridView } = init('realgrid');
    gridView.checkAll(true);

    // 헤드의 체크를 강제로 dispatch했지만 각행의 checkbox는 checked 되지 않았다.
    // setTimeout(() => {
    //   document.getElementsByClassName('rg-checkbox')[3].dispatchEvent(new MouseEvent('click', {
    //     view: window,
    //     bubbles: true,
    //     cancelable: true
    //   }));
    //   gridView.refresh();
    // }, 1000);
  });

  return container;
};

export const checkItem = () => {
  useEffect(() => {
    const { gridView } = init('realgrid');
    gridView.checkItem(2);
  });

  return container;
};