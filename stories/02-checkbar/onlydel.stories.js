import { useEffect } from '@storybook/client-api';
import { gridContainer, initDataset } from '../_common';

export default {
  title: '02-체크바',
};

export const 체크바보이기 = () => {
  useEffect(() => {
    initDataset(1);
  });

  return gridContainer();
};

export const 체크바_넓이40 = () => {
  useEffect(() => {
    const { gridView } = initDataset(1);
    gridView.checkBar.width = 40;
  });

  return gridContainer();
};

export const 체크바감추기 = () => {
  useEffect(() => {
    const { gridView } = initDataset(1);
    gridView.checkBar.visible = false;
  });

  return gridContainer();
};

export const 체크바_모두체크감추기 = () => {
  useEffect(() => {
    const { gridView } = initDataset(1);
    gridView.checkBar.showAll = false;
  });

  return gridContainer();
};

export const checkAll = () => {
  useEffect(() => {
    const { gridView } = initDataset(1);
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

  return gridContainer();
};

export const checkItem = () => {
  useEffect(() => {
    const { gridView } = initDataset(1);
    gridView.checkItem(2);
  });

  return gridContainer();
};
