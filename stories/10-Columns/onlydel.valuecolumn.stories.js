import { useEffect } from '@storybook/client-api';
import {
  gridContainer,
  init1,
  initFields,
  renderMessage,
  data01,
} from '../_common';

export default {
  title: '10-컬럼-ValueColumn',
};

export const blankwhencopy속성 = () => {
  useEffect(() => {
    const { dataProvider, gridView } = initFields('realgrid');
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

export const blankwhenexport속성 = () => {
  useEffect(() => {
    const { dataProvider, gridView } = initFields('realgrid');
    dataProvider.setRows(data01);

    gridView.setColumns([
      {
        name: 'KorName',
        fieldName: 'KorName',
        blankWhenExport: true,
      },
      {
        name: 'Age',
        fieldName: 'Age',
        blankWhenExport: true,
      },
    ]);

    setTimeout(() => {
      const value = gridView.exportGrid({
        type: 'csv',
      });

      const prop = gridView.getColumnProperty('Age', 'blankWhenExport');
      renderMessage(`blankWhenExport: ${prop} <br> copied: ${value}`);
    }, 300);
  });

  return gridContainer();
};
