import { useEffect } from '@storybook/client-api';
import { gridContainer, renderMessage, initDataset } from '../_common';

export default {
  title: '13-편집',
};

export const rowState = () => {
  useEffect(() => {
    const { gridView, dataProvider } = initDataset(1);
    
    dataProvider.setRowState(0,"created");
    dataProvider.setRowState(1,"updated");
    dataProvider.setRowState(2,"deleted");
    dataProvider.setRowState(3,"createAndDeleted");

    renderMessage(JSON.stringify(dataProvider.getAllStateRows()));
  });

  return gridContainer();
};

export const stateCount = () => {
  useEffect(() => {
    const { gridView, dataProvider } = initDataset(1);
    
    dataProvider.setRowState(0,"created");
    dataProvider.setRowState(1,"updated");
    dataProvider.setRowState(2,"deleted");
    dataProvider.setRowState(3,"createAndDeleted");

    setTimeout(function(){
      var created, updated, deleted, createAndDeleted;
      created = dataProvider.getRowStateCount("created");
      updated = dataProvider.getRowStateCount("updated");
      deleted = dataProvider.getRowStateCount("deleted");
      createAndDeleted = dataProvider.getRowStateCount("createAndDeleted");
  
      renderMessage("created:" + created + " updated:" + updated + " deleted:" + deleted + " createAndDeleted:" + createAndDeleted);
    },200);
  });

  return gridContainer();
};
