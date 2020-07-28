import { useEffect } from '@storybook/client-api';
import {
  gridContainer,
  renderMessage,
  initCustom,
  fields1,
  data1,
} from '../_common';

export default {
  title: '10-컬럼-ValueColumn',
};

export const blankwhencopy속성 = () => {
  useEffect(() => {
    const { dataProvider, gridView } = initCustom('realgrid', fields1);
    dataProvider.setRows(data01);

    gridView.setColumns([
      {
        name: 'KorName',
        fieldName: 'KorName',
        blankWhenCopy: true,
      },
      {
        name: 'Age',
        fieldName: 'Age',
      },
    ]);

    setTimeout(() => {
      const value = gridView.copyToClipboard(
        {
          startColumn: 'KorName',
          endColumn: 'Age',
          startItem: 0,
          endItem: 3,
        },
        false
      );

      const prop = gridView.getColumnProperty('KorName', 'blankWhenCopy');
      renderMessage(`blankWhenCopy: ${prop} <br> copied: ${value}`);
    }, 300);
  });

  return gridContainer();
};

/**
 * issue #1398
 * https://github.com/realgrid/realgriddom/issues/1398
 */
export const _1398 = () => {
  useEffect(() => {
    const { dataProvider, gridView } = initCustom('realgrid', fields1);
    dataProvider.setRows(data01);

    gridView.setColumns([
      {
        name: 'KorName',
        fieldName: 'KorName',
      },
      {
        name: 'Age',
        fieldName: 'Age',
        blankWhenExport: true,
      },
    ]);

    setTimeout(() => {
      gridView.exportGrid({
        type: 'csv',
      });

      const prop = gridView.getColumnProperty('Age', 'blankWhenExport');
      renderMessage(`blankWhenExport: ${prop}`);
    }, 300);
  });

  return gridContainer();
};

export const blankwhenexport속성 = () => {
  useEffect(() => {
    const { dataProvider, gridView } = initCustom('realgrid', fields1);
    dataProvider.setRows(data01);

    gridView.setColumns([
      {
        name: 'KorName',
        fieldName: 'KorName',
        blankWhenExport: false,
      },
      {
        name: 'Age',
        fieldName: 'Age',
        blankWhenExport: true,
      },
    ]);

    setTimeout(() => {
      gridView.exportGrid({
        type: 'csv',
      });

      const prop = gridView.getColumnProperty('Age', 'blankWhenExport');
      renderMessage(`blankWhenExport: ${prop}`);
    }, 300);
  });

  return gridContainer();
};
