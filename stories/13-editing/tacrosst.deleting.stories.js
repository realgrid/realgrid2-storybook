import { useEffect } from '@storybook/client-api';
import { gridContainer, renderMessage, initDataset } from '../_common';

export default {
  title: '13-편집',
};

export const options = () => {
  useEffect(() => {
    const { gridView, dataProvider } = initDataset(1);
    gridView.setEditOptions({
      deletable: true
    });

    dataProvider.setOptions({
      softDeleting: true,
      deleteCreated: true,
    });

    gridView.setOptions({
      hideDeletedRows: true
    });

  });

  return gridContainer();
};

export const removeRow = () => {
  useEffect(() => {
    const { gridView, dataProvider } = initDataset(1);
    gridView.setEditOptions({
      deletable: true
    });

    dataProvider.setOptions({
      softDeleting: true,
      deleteCreated: true,
    });

    setTimeout(() => {
      dataProvider.removeRow(0);
    }, 200);
    
  });

  return gridContainer();
};