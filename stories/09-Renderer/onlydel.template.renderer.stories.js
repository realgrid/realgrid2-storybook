import { useEffect } from '@storybook/client-api';
import {
  gridContainer,
  renderMessage,
  initDataset2,
  initDataset3,
} from '../_common';

export default {
  title: '09-렌더러',
};

/**
 * template cell renderer 에 template 속성 지정
 */
export const template속성 = () => {
  useEffect(() => {
    const { gridView } = initDataset3('realgrid');

    const renderer = {
      type: 'html',
      template:
        "<span style='color: ${value}'>${value}</span> : <span style='color: #fff; background-color: ${value}'>${value}</span>",
    };

    gridView.setColumnProperty('templateColumn', 'renderer', renderer);
  });

  return gridContainer();
};

/**
 * issue #1384 https://github.com/realgrid/realgriddom/issues/1384
 * 콘솔 에러 확인
 */
export const _1384 = () => {
  useEffect(() => {
    const { gridView } = initDataset3('realgrid');

    const renderer = {
      type: 'html',
      template: `
        <span style='color: ${value}'>${value}</span> : 
        <span style='color: #fff; background-color: ${value}'>${value}</span>
        `,
    };

    gridView.setColumnProperty('templateColumn', 'renderer', renderer);
  });

  return gridContainer();
};

export const callback속성 = () => {
  useEffect(() => {
    const { gridView } = initDataset3('realgrid');

    const renderer = {
      type: 'html',
      callback: (grid, model, width, height) => {
        renderMessage('callback이 호출되었습니다.');

        const { value } = model;
        return `<span style='color: ${value}'>${value}</span> : <span style='color: #fff; background-color: ${value}'>${value}</span>`;
      },
    };

    gridView.setColumnProperty('templateColumn', 'renderer', renderer);
  });

  return gridContainer();
};

export const valueCallback호출테스트 = () => {
  useEffect(() => {
    const { gridView } = initDataset3('realgrid');

    const renderer = {
      type: 'html',
      template: "<span style='color: ${some}'>${thing}</span>",
      valueCallback: (grid, model, field) => {
        renderMessage('valueCallback이 호출되었습니다.');
        if (field === 'some') return model.value;
        if (field === 'thing') return `색깔은 ${model.value} 입니다.`;
      },
    };

    gridView.setColumnProperty('templateColumn', 'renderer', renderer);
  });

  return gridContainer();
};

export const object컬럼callBack = () => {
  useEffect(() => {
    const { dataProvider, gridView } = initDataset2();

    const renderer = {
      type: 'html',
      callback: (grid, cell) => {
        console.log(cell.value);
        return `<p>${cell.value}</p>`;
      },
    };

    gridView.setColumnProperty('persons', 'renderer', renderer);
  });

  return gridContainer();
};
