import { useEffect } from '@storybook/client-api';
import { gridContainer, renderMessage, initDataset } from '../_common';

export default {
  title: '09-렌더러-Template',
};

/**
 * template cell renderer 에 template 속성 지정
 */
export const template속성 = () => {
  useEffect(() => {
    const { gridView } = initDataset(3);

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
 * template cell renderer 에 template 속성 지정
 */
export const template링크 = () => {
  useEffect(() => {
    const { gridView } = initDataset(3);

    const renderer = {
      type: 'html',
      template:
        "<a href='https://www.w3schools.com/colors/color_tryit.asp?color=${value}'>${value}</a>",
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
    const { gridView } = initDataset(3);

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
    const { gridView } = initDataset(3);

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
    const { gridView } = initDataset(3);

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
    const { dataProvider, gridView } = initDataset(2);

    const renderer = {
      type: 'html',
      callback: (grid, dataCell) => {
        let temp = '';
        if (!dataCell.value) return temp;

        let users = dataCell.value;
        if (!Array.isArray(dataCell.value)) users = [].concat(users);

        users.map((user, index) => {
          temp = temp.concat(`<a href="#${user.id}">${user.displayName}</a> `);
        });

        return `${temp}`;
      },
    };

    gridView.setColumnProperty('persons', 'renderer', renderer);
  });

  return gridContainer();
};

export const object컬럼valueCallback = () => {
  useEffect(() => {
    const { dataProvider, gridView } = initDataset(2);

    const renderer = {
      type: 'html',
      template: "ID: ${id}, 이름: ${name}",
      valueCallback: (grid, dataCell, field) => {
        let temp = 'unknown';
        if (!dataCell.value) return temp;

        let users = dataCell.value;
        if (!Array.isArray(dataCell.value)) users = [].concat(users);

        if (field === 'id') return users[0].id;
        if (field === 'name') return users[0].displayName;
        return '여기가지 오면 안된다.';
      },
    };

    gridView.setColumnProperty('persons', 'renderer', renderer);
  });

  return gridContainer();
};
