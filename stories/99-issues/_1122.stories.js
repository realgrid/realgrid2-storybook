import { document } from 'global';
import { action } from '@storybook/addon-actions';
import { useEffect } from '@storybook/client-api';

import container from '../__share/container.html';
import { fields01 } from '../__share/fields';
import { columns01 } from '../__share/columns';
import { data01 } from '../__share/data';

export default {
  title: '99-이슈 확인',
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

export const _1122 = () => {
  useEffect(() => {
    const { gridView } = init();
    setTimeout(() => {
      gridView.setHeader({ visible: false });
    }, 100);
  });

  return container;
};