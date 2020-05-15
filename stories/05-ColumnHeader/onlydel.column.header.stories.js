import { useEffect } from '@storybook/client-api';
import { gridContainer, init, renderMessage } from '../_common';

export default {
  title: '05-컬럼 헤더',
};

export const 헤더체크컬럼 = () => {
  useEffect(() => {
    const { gridView } = init('realgrid');

    const checkColumn = gridView.columnByName('KorName');
    checkColumn.header.checkLocation = 'left';
    checkColumn.checked = true;
    gridView.setColumn(checkColumn);
  });

  return gridContainer();
};

export const text_displayText = () => {
  useEffect(() => {
    const { gridView } = init('realgrid');

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
    const { gridView } = init('realgrid');
    gridView.setHeader({ height: 60, showToolTop: true, tooltip: '젠더' });

    // setTimeout(() => {
    //   const checkColumn = gridView.columnByName('SexLabel');
    //   checkColumn.header.showTooltip = true;
    //   checkColumn.header.tooltip = '젠더';
    //   gridView.setColumn(checkColumn);
    // });
  });

  return gridContainer();
};
