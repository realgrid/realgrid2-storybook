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

const addTableColumn = (columnName, columnType, provider, view) => {
  provider.addField({
    fieldName: columnName,
    valueType: columnType,
  });

  view.addColumn({
    name: columnName,
    fieldName: columnName,
    width: 150,
    header: {
      text: columnName,
    },
    editor: { type: "line" },
  });
}

const addTableData = (provider, view) => {
  const values = [];
  const colLength = view.getColumnNames().length;
  for (let i = 0; i < colLength; i++) {
    values.push(100);
  }

  provider.addRow(values);
  // if (datachanged === 0) {
  //   setDatachanged(1)
  // } else {
  //   setDatachanged(0)
  // }
}
export const hellosuIssue28생성 = () => {
  useEffect(() => {
    const dataProvider = new RealGrid.LocalDataProvider();
    const gridView = new RealGrid.GridView('realgrid');
    gridView.setDataSource(dataProvider);
  });

  return gridContainer();
};

export const hellosuIssue28필드컬럼추가 = () => {
  useEffect(() => {
    const dataProvider = new RealGrid.LocalDataProvider();
    const gridView = new RealGrid.GridView('realgrid');
    gridView.setDataSource(dataProvider);

    addTableColumn('colName', 'number', dataProvider, gridView);
  });

  return gridContainer();
};

export const hellosuIssue28데이터추가 = () => {
  useEffect(() => {
    const dataProvider = new RealGrid.LocalDataProvider();
    const gridView = new RealGrid.GridView('realgrid');
    gridView.setDataSource(dataProvider);

    addTableColumn('colName', 'number', dataProvider, gridView);
    addTableData(dataProvider, gridView);
  });

  return gridContainer();
};

