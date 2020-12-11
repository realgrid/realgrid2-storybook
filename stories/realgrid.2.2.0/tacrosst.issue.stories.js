import { useEffect } from '@storybook/client-api';
import { gridContainer, renderMessage, initDataset } from '../_common';

export default {
  title: 'issue1476',
};

export const fitLayoutWidth = () => {
  useEffect(() => {
    const { gridView, dataProvider } = initDataset(1);

    gridView.fitLayoutWidth("Gender");
    console.log(RealGrid.getVersion())
  });

  return gridContainer();
};
