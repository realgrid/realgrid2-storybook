import { useEffect } from '@storybook/client-api';
import { gridContainer, init } from '../_common';

export default {
  title: '10-컬럼-ColumnLayoutInfo',
};

export const column = () => {
  useEffect(() => {
    const { gridView } = init('realgrid');
    gridView.setColumnLayout([
      'KorName',
      'SexLabel',
      'Age',
      {
        name: 'Date',
        items: [
          'StartDate',
          {
            column: 'EndDate',
          },
        ],
      },
    ]);
  });

  return gridContainer();
};

export const visible = () => {
  useEffect(() => {
    const { gridView } = init('realgrid');
    gridView.setColumnLayout([
      'KorName',
      'SexLabel',
      'Age',
      {
        name: 'Date',
        items: [
          'StartDate',
          {
            column: 'EndDate',
            visible: false,
          },
        ],
      },
    ]);
  });

  return gridContainer();
};

export const width = () => {
  useEffect(() => {
    const { gridView } = init('realgrid');
    gridView.setColumnLayout([
      'KorName',
      'SexLabel',
      'Age',
      {
        name: 'Date',
        items: [
          'StartDate',
          {
            column: 'EndDate',
            visible: true,
            width: 50,
          },
        ],
      },
    ]);
  });

  return gridContainer();
};
