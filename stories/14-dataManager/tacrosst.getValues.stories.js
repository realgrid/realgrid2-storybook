import { useEffect } from '@storybook/client-api';
import { gridContainer, renderMessage, initDataset } from '../_common';

export default {
  title: '14-값가져오기',
};

export const getValues = () => {
  useEffect(() => {
    const { gridView, dataProvider } = initDataset(1);

    gridView.resetCurrent();
    setTimeout(function(){
      var current = gridView.getCurrent();
      var value = dataProvider.getValue(current.dataRow, current.fieldName);
      renderMessage("row: " + current.dataRow +  " " + "field: " + current.fieldName + " " + "value: " + value);
    },200);

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