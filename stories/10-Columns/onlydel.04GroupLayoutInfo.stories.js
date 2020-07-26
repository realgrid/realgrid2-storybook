import { useEffect } from '@storybook/client-api';
import { gridContainer, init } from '../_common';

export default {
  title: '10-컬럼-GroupLayoutInfo',
};

export const setColumnLayout = () => {
  useEffect(() => {
    const { gridView } = init('realgrid');
    gridView.setColumnLayout([
      'KorName',
      'SexLabel',
      'Age',
      {
        name: 'Date',
        items: ['StartDate', 'EndDate'],
      },
    ]);
  });

  return gridContainer();
};

export const 레이아웃그룹헤더 = () => {
  useEffect(() => {
    const { gridView } = init('realgrid');
    gridView.setColumnLayout([
      'KorName',
      'SexLabel',
      'Age',
      {
        name: 'Date',
        header: {
          text: '기간',
        },
        items: ['StartDate', 'EndDate'],
      },
    ]);
  });

  return gridContainer();
};

export const 레이아웃그룹디렉션 = () => {
  useEffect(() => {
    const { gridView } = init('realgrid');
    gridView.setColumnLayout([
      'KorName',
      'SexLabel',
      'Age',
      {
        name: 'Date',
        header: {
          text: '기간',
        },
        direction: 'vertical',
        items: ['StartDate', 'EndDate'],
      },
    ]);
  });

  return gridContainer();
};

export const 레이아웃헤더감추기 = () => {
  useEffect(() => {
    const { gridView } = init('realgrid');
    gridView.setColumnLayout([
      'KorName',
      'SexLabel',
      'Age',
      {
        name: 'Date',
        header: {
          text: '기간',
          visible: false,
        },
        direction: 'vertical',
        items: ['StartDate', 'EndDate'],
      },
    ]);
  });

  return gridContainer();
};

export const 레이아웃그룹visible = () => {
  useEffect(() => {
    const { gridView } = init('realgrid');
    gridView.setColumnLayout([
      'KorName',
      'SexLabel',
      'Age',
      {
        name: 'Date',
        header: {
          text: '기간',
        },
        direction: 'vertical',
        visible: false,
        items: ['StartDate', 'EndDate'],
      },
    ]);
  });

  return gridContainer();
};

export const 레이아웃그룹너비 = () => {
  useEffect(() => {
    const { gridView } = init('realgrid');
    gridView.setColumnLayout([
      'KorName',
      'SexLabel',
      {
        name: 'age',
        items: ['Age'],
      },
      {
        name: 'Date',
        header: {
          text: '기간',
        },
        visible: true,
        width: 220,
        items: ['StartDate', 'EndDate'],
      },
    ]);
  });

  return gridContainer();
};

export const 디렉션설정오류테스트1 = () => {
  useEffect(() => {
    const { gridView } = init('realgrid');
    gridView.setColumnLayout([
      'KorName',
      'SexLabel',
      {
        name: 'age',
        items: ['Age'],
        direction: 'vertical',
      },
      {
        name: 'Date',
        header: {
          text: '기간',
        },
        direction: 'vertical',
        items: ['StartDate', 'EndDate'],
      },
    ]);
  });

  return gridContainer();
};

export const 디렉션설정오류테스트2 = () => {
  useEffect(() => {
    const { gridView } = init('realgrid');
    gridView.setColumnLayout([
      'KorName',
      'SexLabel',
      {
        name: 'age',
        items: ['Age'],
      },
      {
        name: 'Date',
        header: {
          text: '기간',
        },
        direction: 'vertical',
        items: ['StartDate', 'EndDate'],
      },
    ]);
  });

  return gridContainer();
};
