import { useEffect } from '@storybook/client-api';
import {
  gridContainer,
  renderMessage,
  initCustom,
  fields1,
  data1,
} from '../_common';

export default {
  title: '10-컬럼-DataColumn',
};

export const width컬럼생성 = () => {
  useEffect(() => {
    const { dataProvider, gridView } = initCustom('realgrid', fields1);
    dataProvider.setRows(data1);

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
