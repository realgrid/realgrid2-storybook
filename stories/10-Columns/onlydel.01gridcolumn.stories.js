import { useEffect } from '@storybook/client-api';
import {
  gridContainer,
  renderMessage,
  initCustom,
  fields1,
  data1,
} from '../_common';

export default {
  title: '10-컬럼-GridColumn',
};

export const 필드없이컬럼생성 = () => {
  useEffect(() => {
    const { gridView } = initCustom('realgrid');

    gridView.setColumns([
      {
        fieldName: 'KorName',
      },
    ]);
  });

  return gridContainer();
};

export const 노필드데이터넣고컬럼생성 = () => {
  useEffect(() => {
    const { dataProvider, gridView } = initCustom('realgrid');
    dataProvider.setRows(data1);
    gridView.setColumns([
      {
        fieldName: 'KorName',
      },
    ]);
  });

  return gridContainer();
};

export const 컬럼생성 = () => {
  useEffect(() => {
    const { dataProvider, gridView } = initCustom('realgrid', fields1);
    dataProvider.setRows(data1);

    gridView.setColumns([
      {
        fieldName: 'KorName',
      },
      {
        name: 'Age',
        fieldName: 'Age',
      },
    ]);
  });

  return gridContainer();
};

export const movable속성 = () => {
  useEffect(() => {
    const { dataProvider, gridView } = initCustom('realgrid', fields1);
    dataProvider.setRows(data1);

    gridView.setColumns([
      {
        name: 'KorName',
        fieldName: 'KorName',
        movable: false,
      },
      {
        name: 'Age',
        fieldName: 'Age',
      },
    ]);

    const prop = gridView.getColumnProperty('KorName', 'movable');

    renderMessage(`movable: ${prop} <br> KorName 컬럼 이동 불가 테스트`);
  });

  return gridContainer();
};

export const resizable속성 = () => {
  useEffect(() => {
    const { dataProvider, gridView } = initCustom('realgrid', fields1);
    dataProvider.setRows(data1);

    gridView.setColumns([
      {
        name: 'KorName',
        fieldName: 'KorName',
        resizable: false,
      },
      {
        name: 'Age',
        fieldName: 'Age',
      },
    ]);

    const prop = gridView.getColumnProperty('KorName', 'resizable');
    renderMessage(`resizable: ${prop} <br> KorName 컬럼 크기조정 불가 테스트`);
  });

  return gridContainer();
};

export const tag속성 = () => {
  useEffect(() => {
    const { dataProvider, gridView } = initCustom('realgrid', fields1);
    dataProvider.setRows(data1);

    gridView.setColumns([
      {
        name: 'KorName',
        fieldName: 'KorName',
        tag: { key: 'value' },
      },
      {
        name: 'Age',
        fieldName: 'Age',
      },
    ]);

    const prop = gridView.getColumnProperty('KorName', 'tag');
    renderMessage(`tag: ${JSON.stringify(prop)}`);
  });

  return gridContainer();
};

export const visible속성 = () => {
  useEffect(() => {
    const { dataProvider, gridView } = initCustom('realgrid', fields1);
    dataProvider.setRows(data1);

    gridView.setColumns([
      {
        name: 'KorName',
        fieldName: 'KorName',
      },
      {
        name: 'Age',
        fieldName: 'Age',
        visible: false,
      },
    ]);

    const prop = gridView.getColumnProperty('Age', 'visible');
    renderMessage(`visible: ${prop}`);
  });

  return gridContainer();
};

export const width속성 = () => {
  useEffect(() => {
    const { dataProvider, gridView } = initCustom('realgrid', fields1);
    dataProvider.setRows(data1);

    gridView.setColumns([
      {
        name: 'KorName',
        fieldName: 'KorName',
      },
      {
        name: 'Age',
        fieldName: 'Age',
        width: 300,
      },
    ]);

    const prop = gridView.getColumnProperty('Age', 'width');
    renderMessage(`width: ${prop}`);
  });

  return gridContainer();
};
