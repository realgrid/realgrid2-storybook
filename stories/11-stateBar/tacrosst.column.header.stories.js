import { useEffect } from '@storybook/client-api';
import { gridContainer, initDataset } from '../_common';

export default {
  title: '11-상태바',
};

export const 상태변경 = () => {
  useEffect(() => {
    const { dataProvider, gridView } = initDataset(1);
    dataProvider.setRowState(0, 'created');
    dataProvider.setRowState(1, 'updated');
    dataProvider.setRowState(2, 'createAndDeleted');
    dataProvider.setRowState(3, 'deleted');
  });

  return gridContainer();
};
