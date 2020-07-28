import { useEffect } from '@storybook/client-api';
import { gridContainer, initDataset1, renderMessage } from '../_common';

export default {
  title: '05-ColumnHeader',
};

export const 헤더체크컬럼 = () => {
  useEffect(() => {
    const { gridView } = initDataset1('realgrid');

    const checkColumn = gridView.columnByName('KorName');
    checkColumn.header.checkLocation = 'left';
    checkColumn.checked = false;
    gridView.setColumn(checkColumn);
  });

  return gridContainer();
};

export const 헤더체크_위치 = () => {
  useEffect(() => {
    const { gridView } = initDataset1('realgrid');

    const checkColumn = gridView.columnByName('KorName');
    checkColumn.header.checkLocation = 'rightEdge';
    checkColumn.checked = true;
    gridView.setColumn(checkColumn);
  });

  return gridContainer();
};

export const text_displayText = () => {
  useEffect(() => {
    const { gridView } = initDataset1('realgrid');

    const checkColumn = gridView.columnByName('SexLabel');
    checkColumn.header.text = '젠더';
    gridView.setColumn(checkColumn);

    const text = checkColumn.header.displayText;
    renderMessage(`SexLabel 컬럼헤더: 젠더 = ${text === '젠더'}`);
  });

  return gridContainer();
};

export const 툴팁 = () => {
  useEffect(() => {
    const { gridView } = initDataset1(
      'realgrid',
      () => {
        const checkColumn = gridView.columnByName('SexLabel');
        checkColumn.header.showTooltip = true;
        checkColumn.header.as = '젠더';
        gridView.setColumn(checkColumn);
        gridView.setHeader({ height: 60, showToolTop: true, tooltip: '젠더' });
      },
      500
    );
  });

  return gridContainer();
};
