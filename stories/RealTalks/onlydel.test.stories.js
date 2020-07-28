import { useEffect } from '@storybook/client-api';
import {
  gridContainer,
  initDataset,
  fields2,
  columns2,
  data2,
} from '../_common';

export default {
  title: 'RealTalks',
};

export const 그리드생성 = () => {
  useEffect(() => {
    const dataProvider = new RealGrid.LocalDataProvider();
    const gridView = new RealGrid.GridView('realgrid');
    gridView.setDataSource(dataProvider);

    dataProvider.setFields(fields2);
    gridView.setColumns(columns2);

    dataProvider.setRows(data2);
  });

  return gridContainer();
};

export const object타입컬럼 = () => {
  useEffect(() => {
    const { dataProvider, gridView } = initDataset(2);

    const renderer = {
      type: 'html',
      callback: (grid, cell) => {
        console.log(cell.value);
        return `<p>${cell.value}</p>`;
      },
    };

    gridView.setColumnProperty('persons', 'renderer', renderer);
  });

  return gridContainer();
};
