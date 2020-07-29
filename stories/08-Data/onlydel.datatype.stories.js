import { useEffect } from '@storybook/client-api';
import {
  gridContainer,
  renderMessage,
  initDataset,
} from '../_common';

export default {
  title: '08-데이터-타입',
};

/** getValue()로 얻은 값의 타입 찍어주기 */
const renderFieldType = (dataProvider, fieldIndex) => {
  const rowCount = dataProvider.getRowCount();
  for (let row = 0; row < rowCount; row++) {
    const typeofValue = typeof dataProvider.getValue(row, fieldIndex);
    renderMessage(`typeof value[${row}, ${fieldIndex}]: ${typeofValue}`);
  }
}

export const text타입 = () => {
  useEffect(() => {
    const { gridView, dataProvider } = initDataset(4);
    gridView.setColumnProperty('textColumn', 'visible', true);
    renderFieldType(dataProvider, 0);
  });

  return gridContainer();
};

export const number타입 = () => {
  useEffect(() => {
    const { gridView, dataProvider } = initDataset(4);
    gridView.setColumnProperty('numberColumn', 'visible', true);
    renderFieldType(dataProvider, 1);
  });

  return gridContainer();
};

export const datetime타입 = () => {
  useEffect(() => {
    const { gridView, dataProvider } = initDataset(4);
    gridView.setColumnProperty('datetimeColumn', 'visible', true);
    renderFieldType(dataProvider, 2);
  });

  return gridContainer();
};

export const boolean타입 = () => {
  useEffect(() => {
    const { gridView, dataProvider } = initDataset(4);
    gridView.setColumnProperty('booleanColumn', 'visible', true);
    renderFieldType(dataProvider, 3);
  });

  return gridContainer();
};

export const object타입 = () => {
  useEffect(() => {
    const { gridView, dataProvider } = initDataset(4);
    gridView.setColumnProperty('objectColumn', 'visible', true);
    renderFieldType(dataProvider, 4);
  });

  return gridContainer();
};

export const Template렌더러타입1 = () => {
  useEffect(() => {
    const { gridView, dataProvider } = initDataset(4);
    gridView.setColumnProperty('objectTemplateColumn', 'visible', true);
    renderMessage(`value: ${dataProvider.getValue(2, 4)[0]}`);
    renderMessage(`typeof: ${typeof dataProvider.getValue(2, 4)[0]}`);
  });

  return gridContainer();
};

export const Template렌더러타입2 = () => {
  useEffect(() => {
    const { gridView, dataProvider } = initDataset(2);
    renderMessage(`value: ${dataProvider.getValue(1, 4)[0]}`);
    renderMessage(`typeof: ${typeof dataProvider.getValue(1, 4)[0]}`);
  });

  return gridContainer();
};

