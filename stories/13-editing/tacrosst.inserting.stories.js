import { useEffect } from '@storybook/client-api';
import { gridContainer, initDataset } from '../_common';

export default {
  title: '13-편집',
};

export const 지정행이전행삽입 = () => {
  useEffect(() => {
    const { gridView } = initDataset(1);
    gridView.setEditOptions({
      insertable: true,
      appendable: true
    });

    setTimeout(() => {
      var curr = gridView.getCurrent();
      gridView.beginInsertRow(Math.max(0, curr.itemIndex), false);
      gridView.showEditor();
      gridView.setFocus();
    }, 200);
  });

  return gridContainer();
};

export const 지정행이후행삽입 = () => {
  useEffect(() => {
    const { gridView } = initDataset(1);
    gridView.setEditOptions({
      insertable: true,
      appendable: true
    });

    setTimeout(() => {
      var curr = gridView.getCurrent();
      gridView.beginInsertRow(Math.max(0, curr.itemIndex), true);
      gridView.showEditor();
      gridView.setFocus();
    }, 200);
  });

  return gridContainer();
};

export const 행추가 = () => {
  useEffect(() => {
    const { gridView } = initDataset(1);
    gridView.setEditOptions({
      insertable: true,
      appendable: true
    });

    setTimeout(() => {
      gridView.beginAppendRow();
      gridView.showEditor();
      gridView.setFocus();
    }, 200);
  });

  return gridContainer();
};