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

export const 상태바숨김 = () => {
  useEffect(() => {
    const { dataProvider, gridView } = initDataset(1);
    gridView.setStateBar({
      visible: false
    });
  });

  return gridContainer();
};

export const text로표시 = () => {
  useEffect(() => {
    const { dataProvider, gridView } = initDataset(1);
    gridView.setStateBar({
      mark: "text",
      stateTexts: {
        created: "C",
        updated: "U",
        deleted: "D",
        createAndDeleted: "X"
      }
    });

    dataProvider.setRowState(0, 'created');
    dataProvider.setRowState(1, 'updated');
    dataProvider.setRowState(2, 'createAndDeleted');
    dataProvider.setRowState(3, 'deleted');
  });

  return gridContainer();
};

export const 상태바헤더푸터 = () => {
  useEffect(() => {
    const { dataProvider, gridView } = initDataset(1);
    gridView.setStateBar({
      headText: "H",
      footText: "F"
    });
  });

  return gridContainer();
};
