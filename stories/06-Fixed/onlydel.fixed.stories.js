import { useEffect } from '@storybook/client-api';
import { gridContainer, init, renderMessage } from '../_common';

export default {
  title: '06-Fiexed',
};

export const 행고정 = () => {
  useEffect(() => {
    const { gridView } = init('realgrid');

    gridView.setFixedOptions({
      rowCount: 2,
    });
  });

  return gridContainer();
};

export const 열고정 = () => {
  useEffect(() => {
    const { gridView } = init('realgrid');

    gridView.setFixedOptions({
      colCount: 2,
    });
  });

  return gridContainer();
};

export const 행열고정 = () => {
  useEffect(() => {
    const { gridView } = init('realgrid');

    gridView.setFixedOptions({
      colCount: 2,
      rowCount: 2,
    });
  });

  return gridContainer();
};
