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
      callback: (grid, dataCell) => {
        let temp = ''
        if (!dataCell.value) return temp;

        let users = dataCell.value;
        if (!Array.isArray(dataCell.value)) users = [].concat(users);

        users.map((user, index) => {
          temp = temp.concat(`<a href="#${user.id}">${user.displayName}</a> `);
        });

        return `${temp}`;
      },
    };

    gridView.setColumnProperty('persons', 'renderer', renderer);
  });

  return gridContainer();
};
