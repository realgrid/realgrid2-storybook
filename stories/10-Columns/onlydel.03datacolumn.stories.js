import { useEffect } from '@storybook/client-api';
import {
  gridContainer,
  init1,
  initFields,
  renderMessage,
  data01,
} from '../_common';

export default {
  title: '10-컬럼-DataColumn',
};

export const width컬럼생성 = () => {
  useEffect(() => {
    const { dataProvider, gridView } = initFields('realgrid');
    dataProvider.setRows(data01);

    gridView.setColumns([
      {
        name: 'KorName',
        fieldName: 'KorName',
      },
      {
        name: 'Age',
        fieldName: 'Age',
        width: 300,
      },
    ]);

    const prop = gridView.getColumnProperty('Age', 'width');
    renderMessage(`width: ${prop}`);
  });

  return gridContainer();
};
