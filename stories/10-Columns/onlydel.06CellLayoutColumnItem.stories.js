import { useEffect } from '@storybook/client-api';
import { gridContainer, renderMessage, initDataset } from '../_common';

export default {
  title: '10-컬럼-CellLayoutColumnItem',
};

export const getLayout = () => {
  useEffect(() => {
    const { gridView } = initDataset(1);
    gridView.setColumnLayout([
      'KorName',
      {
        name: 'companyGroup',
        items: [
          'Age',
          10,
          50,
          {
            column: 'SexLabel',
            cellSpan: 1,
          },
          50,
          50,
        ],
        header: {
          text: '컬럼 Group',
          visible: true,
        },
      },
    ]);

    setTimeout(() => {
      const layout = gridView.getLayoutByColumn('SexLabel');
      renderMessage(`<pre>${JSON.stringify(layout, '', 2)}</pre>`);
    }, 100);
  });

  return gridContainer();
};

export const cellSpan = () => {
  useEffect(() => {
    const { gridView } = initDataset(1);
    gridView.setColumnLayout([
      'KorName',
      {
        name: 'companyGroup',
        items: [
          'Age',
          10,
          50,
          {
            column: 'SexLabel',
            cellSpan: 1,
          },
          50,
          50,
        ],
        header: {
          text: '컬럼 Group',
          visible: true,
        },
      },
    ]);

    setTimeout(() => {
      const column = gridView.columnByName('SexLabel');
      column.layout.cellSpan = 3;
      renderMessage(`cellSpan: ${column.layout.cellSpan}`);
    }, 100);
  });

  return gridContainer();
};

export const vindex = () => {
  useEffect(() => {
    const { gridView } = initDataset(1);
    gridView.setColumnLayout([
      'KorName',
      {
        name: 'companyGroup',
        items: [
          'Age',
          10,
          50,
          {
            column: 'SexLabel',
            cellSpan: 1,
          },
          50,
          50,
        ],
        header: {
          text: '컬럼 Group',
          visible: true,
        },
      },
    ]);

    setTimeout(() => {
      const column = gridView.columnByName('SexLabel');
      renderMessage(`vindex: ${column.layout.vindex}`);
    }, 100);
  });

  return gridContainer();
};

export const equalBlank = () => {
  useEffect(() => {
    const { gridView } = initDataset(1);
    gridView.setColumnLayout([
      'KorName',
      {
        name: 'companyGroup',
        items: [
          'Age',
          10,
          50,
          {
            column: 'SexLabel',
            equalBlank: true,
          },
          {
            name: 'Date Group',
            items: ['StartDate', 'EndDate'],
          },
        ],
        header: {
          text: '컬럼 Group',
          visible: true,
        },
      },
    ]);

    setTimeout(() => {
      const column = gridView.columnByName('SexLabel');
      renderMessage(`equalBlank: ${column.layout.equalBlank}`);
      column.layout.equalBlank = true;
      renderMessage(`equalBlank: ${column.layout.equalBlank}`);
    }, 100);
  });

  return gridContainer();
};
