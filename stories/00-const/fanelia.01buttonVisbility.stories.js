import { useEffect } from '@storybook/client-api';
import {
  gridContainer,
  renderMessage,
  initCustom,
  fields1,
  columns1,
  data1,
} from '../_common';

export default {
  title: '00-글로벌 상수-ButtonVisibility',
};

export const always속성 = () => {
  useEffect(() => {
    const { dataProvider, gridView } = initCustom('realgrid', fields1);
    dataProvider.setRows(data1);

    gridView.setColumns([
      {
        name: 'KorName',
        fieldName: 'KorName',
        button: 'popup',
        buttonVisibility: "always",
        header: "always"
      },
      {
        name: 'KorName1',
        fieldName: 'KorName',
        button: 'popup',
        buttonVisibility: "visible",
        header: "visible"
      },
      {
        name: 'Age',
        fieldName: 'Age',
        button: 'action',
        header: "always",
        buttonVisibility: "always"
      },
      {
        name: 'Age',
        fieldName: 'Age',
        button: 'action',
        header: "hidden",
        buttonVisibility: "hidden"
      },
      {
        name: 'SexLabel',
        fieldName: 'SexLabel',
        buttonVisibility: "always",
        button: 'none'
      },
    ]);

    setTimeout(() => {
      gridView.setCurrent({itemIndex: 2, column: "KorName1"})
    }, 300);
  });

  return gridContainer();
};

export const default속성 = () => {
  useEffect(() => {
    const { dataProvider, gridView } = initCustom('realgrid', fields1);
    dataProvider.setRows(data1);

    gridView.setColumns([
      {
        name: 'KorName',
        fieldName: 'KorName',
        button: 'popup',
        buttonVisibility: "default",
        header: "default"
      },
      {
        name: 'KorName1',
        fieldName: 'KorName',
        button: 'popup',
        buttonVisibility: "visible",
        header: "visible"
      },
      {
        name: 'Age',
        fieldName: 'Age',
        button: 'action',
        header: "default",
        buttonVisibility: "default"
      },
      {
        name: 'Age',
        fieldName: 'Age',
        button: 'action',
        header: "hidden",
        buttonVisibility: "hidden"
      },
      {
        name: 'SexLabel',
        fieldName: 'SexLabel',
        buttonVisibility: "none",
        button: 'none'
      },
    ]);

    setTimeout(() => {
      gridView.setCurrent({itemIndex: 2, column: "KorName"})
    }, 300);
  });

  return gridContainer();
};

export const hidden속성 = () => {
  useEffect(() => {
    const { dataProvider, gridView } = initCustom('realgrid', fields1);
    dataProvider.setRows(data1);

    gridView.setColumns([
      {
        name: 'KorName',
        fieldName: 'KorName',
        button: 'popup',
        buttonVisibility: "hidden",
        header: "hidden"
      },
      {
        name: 'KorName1',
        fieldName: 'KorName',
        button: 'popup',
        buttonVisibility: "visible",
        header: "visible"
      },
      {
        name: 'Age',
        fieldName: 'Age',
        button: 'action',
        header: "default",
        buttonVisibility: "default"
      },
      {
        name: 'Age',
        fieldName: 'Age',
        button: 'action',
        header: "hidden",
        buttonVisibility: "hidden"
      },
      {
        name: 'SexLabel',
        fieldName: 'SexLabel',
        buttonVisibility: "none",
        button: 'none'
      },
    ]);

    setTimeout(() => {
      gridView.setCurrent({itemIndex: 2, column: "KorName"})
    }, 300);
  });

  return gridContainer();
};

export const rowfocused속성 = () => {
  useEffect(() => {
    const { dataProvider, gridView } = initCustom('realgrid', fields1);
    dataProvider.setRows(data1);

    gridView.setColumns([
      {
        name: 'KorName',
        fieldName: 'KorName',
        button: 'popup',
        buttonVisibility: "rowfocused",
        header: "rowfocused"
      },
      {
        name: 'KorName1',
        fieldName: 'KorName',
        button: 'popup',
        buttonVisibility: "visible",
        header: "visible"
      },
      {
        name: 'Age',
        fieldName: 'Age',
        button: 'action',
        header: "rowfocused",
        buttonVisibility: "rowfocused"
      },
      {
        name: 'Age',
        fieldName: 'Age',
        button: 'action',
        header: "hidden",
        buttonVisibility: "hidden"
      },
      {
        name: 'SexLabel',
        fieldName: 'SexLabel',
        buttonVisibility: "none",
        button: 'none'
      },
    ]);

    setTimeout(() => {
      gridView.setCurrent({itemIndex: 2, column: "KorName"})
    }, 300);
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
        button: 'popup',
        buttonVisibility: "visible",
        header: "visible"
      },
      {
        name: 'KorName1',
        fieldName: 'KorName',
        button: 'popup',
        buttonVisibility: "visible",
        header: "visible"
      },
      {
        name: 'Age',
        fieldName: 'Age',
        button: 'action',
        header: "visible",
        buttonVisibility: "visible"
      },
      {
        name: 'Age',
        fieldName: 'Age',
        button: 'action',
        header: "hidden",
        buttonVisibility: "hidden"
      },
      {
        name: 'SexLabel',
        fieldName: 'SexLabel',
        buttonVisibility: "none",
        button: 'none'
      },
    ]);

    setTimeout(() => {
      gridView.setCurrent({itemIndex: 2, column: "KorName"})
    }, 300);
  });

  return gridContainer();
};