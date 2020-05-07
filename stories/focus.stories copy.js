import { document } from 'global';
import { action } from '@storybook/addon-actions';
import { useEffect } from '@storybook/client-api';
import container from './container.html';

import { data01 } from './data';

export default {
  title: '02-체크바',
};

// const 

export const 체크바감추기 = () => {
  useEffect(() => {
    const dataProvider = new RealGrid.LocalDataProvider();
    dataProvider.setFields(fields);

    const gridView = new RealGrid.GridView('realgrid');
    gridView.setDataSource(dataProvider);
    gridView.setColumns(columns);

    dataProvider.setRows(data01);
    gridView.refresh();

    document.getElementById('realgrid').addEventListener('focusin', () => {
      action('focus');
      console.log('focus');
    });
  });

  return container;
};