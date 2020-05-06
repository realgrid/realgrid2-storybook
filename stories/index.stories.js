import { document } from 'global';
import { action } from '@storybook/addon-actions';
import { useEffect } from '@storybook/client-api';
import testhtml from './test.html';

export default {
  title: 'RealGrid HTML',
};

const data = [
  {
    KorName: '박영호2',
    SexLabel: '남',
    Age: '71',
    Phone: '(025)6563-2802',
    StartDate: '2018-02-25',
    EndDate: '2021-08-12',
  },
  {
    KorName: '조일형',
    SexLabel: '남',
    Age: '62',
    Phone: '(093)8809-8696',
    StartDate: '2019-10-21',
    EndDate: '2022-12-11',
  },
  {
    KorName: '김덕중',
    SexLabel: '여',
    Age: '53',
    Phone: '(064)5483-6874',
    StartDate: '2018-12-30',
    EndDate: '2022-01-16',
  },
];

const fields = [
  {
    fieldName: 'KorName',
    dataType: 'text',
  },
  {
    fieldName: 'SexLabel',
    dataType: 'text',
  },
  {
    fieldName: 'Age',
    dataType: 'number',
  },
  {
    fieldName: 'Phone',
    dataType: 'text',
  },
  {
    fieldName: 'StartDate',
    dataType: 'datetime',
    datetimeFormat: 'yyyy-MM-dd',
    amText: '오전',
    pmText: '오후',
  },
  {
    fieldName: 'EndDate',
    dataType: 'datetime',
    datetimeFormat: 'yyyy-MM-dd',
    amText: '오전',
    pmText: '오후',
  },
];

const columns = [
  {
    name: 'KorName',
    fieldName: 'KorName',
    type: 'data',
    width: '60',
    styles: {
      textAlignment: 'center',
    },
    header: {
      text: '이름',
    },
    renderer: {
      type: 'text',
    },
  },
  {
    name: 'SexLabel',
    fieldName: 'SexLabel',
    type: 'data',
    width: '40',
    styles: {
      textAlignment: 'center',
    },
    header: {
      text: '성별',
    },
    renderer: {
      type: 'text',
    },
  },
  {
    name: 'Age',
    fieldName: 'Age',
    type: 'data',
    width: '40',
    styles: {
      textAlignment: 'center',
    },
    header: {
      text: '나이',
    },
    renderer: {
      type: 'text',
    },
  },

  {
    name: 'StartDate',
    fieldName: 'StartDate',
    type: 'data',
    width: '100',
    styles: {
      textAlignment: 'center',
    },
    header: {
      text: '최초납입일',
      showTooltip: true,
      tooltip: '납입일의 툴팁입니다.',
    },
  },
  {
    name: 'EndDate',
    fieldName: 'EndDate',
    type: 'data',
    width: '100',
    styles: {
      textAlignment: 'center',
    },
    header: {
      text: '종료일',
    },
  },
];

export const GridSample = () => {
  useEffect(() => {
    const dataProvider = new RealGrid.LocalDataProvider();
    dataProvider.setFields(fields);

    const gridView = new RealGrid.GridView('realgrid');
    gridView.setDataSource(dataProvider);
    gridView.setColumns(columns);

    dataProvider.setRows(data);
    gridView.refresh();

    document.getElementById('realgrid').addEventListener('focusin', () => {
      action('focus');
      console.log('focus');
    });
  });

  return testhtml;
};