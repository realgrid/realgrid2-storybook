import { useEffect } from '@storybook/client-api';
import { gridContainer, renderMessage, initDataset } from '../_common';

export default {
  title: '13-편집',
};

export const lineCellEditor = () => {
  useEffect(() => {
    const { gridView, dataProvider } = initDataset(1);

    setTimeout(() => {
      gridView.resetCurrent();
      gridView.showEditor();
      gridView.setEditValue("text");
    },200);

  });

  return gridContainer();
};

export const lineCellEditorUpper = () => {
  useEffect(() => {
    const { gridView, dataProvider } = initDataset(1);

    gridView.setColumnProperty("KorName", "editor", { textCase: "upper" });

    setTimeout(() => {
      gridView.resetCurrent();
      gridView.showEditor();
      gridView.setEditValue("text");
    },200);

  });

  return gridContainer();
};