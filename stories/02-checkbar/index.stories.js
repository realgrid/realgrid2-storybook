import { document } from 'global';
import { action } from '@storybook/addon-actions';
import { useEffect } from '@storybook/client-api';
import container from './container.html';

import { fields01 } from '../fields';
import { columns01 } from '../columns';
import { data01 } from '../data';

export default {
  title: '02-체크바',
};

const init = () => {
  const dataProvider = new RealGrid.LocalDataProvider();
  const gridView = new RealGrid.GridView('realgrid');
  gridView.setDataSource(dataProvider);

  dataProvider.setFields(fields01);
  gridView.setColumns(columns01);
  dataProvider.setRows(data01);

  return { gridView, dataProvider };
};

export const 체크바보이기 = () => {
  useEffect(() => {
    init();
  });

  return container;
};

export const 체크바_넓이40 = () => {
  useEffect(() => {
    const { gridView } = init();
    gridView.checkBar.width = 40;
  });

  return container;
};

export const 체크바감추기 = () => {
  useEffect(() => {
    const { gridView } = init();
    gridView.checkBar.visible = false;
  });

  return container;
};

export const 체크바_모두체크감추기 = () => {
  useEffect(() => {
    const { gridView } = init();
    gridView.checkBar.showAll = false;
  });

  return container;
};

export const checkAll = () => {
  useEffect(() => {
    const { gridView } = init();
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
    const { gridView } = init();
    gridView.checkItem(1);
  });

  return container;
};