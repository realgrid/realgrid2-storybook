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
  title: '10-컬럼-ValueColumn',
};

export const blankwhencopy속성 = () => {
  useEffect(() => {
    const { dataProvider, gridView } = initCustom('realgrid', fields1);
    dataProvider.setRows(data1);

    gridView.setColumns([
      {
        name: 'KorName',
        fieldName: 'KorName',
        blankWhenCopy: true,
      },
      {
        name: 'Age',
        fieldName: 'Age',
      },
    ]);

    setTimeout(() => {
      const value = gridView.copyToClipboard(
        {
          startColumn: 'KorName',
          endColumn: 'Age',
          startItem: 0,
          endItem: 3,
        },
        false
      );

      const prop = gridView.getColumnProperty('KorName', 'blankWhenCopy');
      renderMessage(`blankWhenCopy: ${prop} <br> copied: ${value}`);
    }, 300);
  });

  return gridContainer();
};

/**
 * issue #1398
 * https://github.com/realgrid/realgriddom/issues/1398
 */
export const _1398 = () => {
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
        blankWhenExport: true,
      },
    ]);

    setTimeout(() => {
      gridView.exportGrid({
        type: 'csv',
      });

      const prop = gridView.getColumnProperty('Age', 'blankWhenExport');
      renderMessage(`blankWhenExport: ${prop}`);
    }, 300);
  });

  return gridContainer();
};

export const blankwhenexport속성 = () => {
  useEffect(() => {
    const { dataProvider, gridView } = initCustom('realgrid', fields1);
    dataProvider.setRows(data1);

    gridView.setColumns([
      {
        name: 'KorName',
        fieldName: 'KorName',
        blankWhenExport: false,
      },
      {
        name: 'Age',
        fieldName: 'Age',
        blankWhenExport: true,
      },
    ]);

    setTimeout(() => {
      gridView.exportGrid({
        type: 'csv',
      });

      const prop = gridView.getColumnProperty('Age', 'blankWhenExport');
      renderMessage(`blankWhenExport: ${prop}`);
    }, 300);
  });

  return gridContainer();
};

export const booleanFormat속성 = () => {
  useEffect(() => {
    const { dataProvider, gridView } = initCustom('realgrid');
    
    dataProvider.setFields([{
      fieldName: "aaaa",
      dataType: "boolean"
    }, {
      fieldName: "KorName",
      dataType: "text"
    }]);

    gridView.setColumns([
      {
        name: 'KorName',
        fieldName: 'KorName',
        blankWhenExport: false,
      },
      {
        name: 'aaaa',
        fieldName: 'aaaa',
        booleanFormat: "거짓이야:참인데"
      },
    ]);

    dataProvider.setRows([
      [true,"aaaa"],
      [false,"bbbb"],
      [true,"cccc"],
      ["f", "ddd"],
      ["t", "eee"]
    ]);


    setTimeout(() => {
      
    }, 300);
  });

  return gridContainer();
};

export const button속성 = () => {
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
//      const prop = gridView.getColumnProperty('Age', 'blankWhenExport');
//      renderMessage(`blankWhenExport: ${prop}`);
    }, 300);
  });

  return gridContainer();
};

export const datetimeFormat속성 = () => {
  useEffect(() => {
    const { dataProvider, gridView } = initCustom('realgrid', fields1, columns1);
    dataProvider.setRows(data1);

    gridView.columnByName("StartDate").datetimeFormat = "yyyy-MM-dd"
    gridView.columnByName("EndDate").datetimeFormat = "yyyy.MM.dd"

    setTimeout(() => {

      renderMessage(`최초납입일 -, 종료일 . 으로 구분`);
    }, 300);
  });

  return gridContainer();
};

export const displayMinusZero속성 = () => {
  useEffect(() => {
    const { dataProvider, gridView } = initCustom('realgrid', fields1, columns1);
    dataProvider.setRows(data1);
    gridView.columnByName("Age").displayMinusZero = false;
    gridView.setValue(1, "Age", 0.000000001 - 0.0000000011)

    setTimeout(() => {

      renderMessage(`양수로 보이면 됨`);
    }, 300);
  });

  return gridContainer();
};