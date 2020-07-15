import { useEffect } from "@storybook/client-api";
import { init1, gridContainer, renderMessage } from "../_common";

export default {
  title: "09-렌더러",
};

const fields = [
  {
    fieldName: "templateField",
    dataType: "text",
  },
];

const columns01 = [
  {
    name: "templateColumn",
    fieldName: "templateField",
    width: 200,
    header: {
      text: "Template cell renderer",
    },
  },
];

const data = [
  { templateField: "red" },
  { templateField: "blue" },
  { templateField: "yellow" },
  { templateField: "black" },
  { templateField: "green" },
  { templateField: "orange" },
];

/**
 * template cell renderer 에 template 속성 지정
 */
export const template속성 = () => {
  useEffect(() => {
    const { dataProvider, gridView } = init1("realgrid");

    dataProvider.setFields(fields);
    gridView.setColumns(columns01);

    dataProvider.setRows(data);

    const renderer = {
      type: "html",
      template:
        "<span style='color: ${value}'>${value}</span> : <span style='color: #fff; background-color: ${value}'>${value}</span>",
    };

    gridView.setColumnProperty("templateColumn", "renderer", renderer);
  });

  return gridContainer();
};

export const callback속성 = () => {
  useEffect(() => {
    const { dataProvider, gridView } = init1("realgrid");

    dataProvider.setFields(fields);
    gridView.setColumns(columns01);

    dataProvider.setRows(data);
    renderMessage("callback이 호출되지 않았습니다.");

    const renderer = {
      type: "html",
      callback: (grid, model, width, height) => {
        renderMessage("callback이 호출되었습니다.");

        const { value } = model;
        return `<span style='color: ${value}'>${value}</span> : <span style='color: #fff; background-color: ${value}'>${value}</span>`;
      },
    };

    gridView.setColumnProperty("templateColumn", "renderer", renderer);
  });

  return gridContainer();
};

export const valueCallback호출테스트 = () => {
  useEffect(() => {
    const { dataProvider, gridView } = init1("realgrid");

    dataProvider.setFields(fields);
    gridView.setColumns(columns01);

    dataProvider.setRows(data);
    renderMessage("valueCallback이 호출되지 않았습니다.");

    const renderer = {
      type: "html",
      template:
        "<span style='color: ${value}'>${value}</span> : <span style='color: #fff; background-color: ${value}'>${value}</span>",
      valueCallback: (grid, model, field) => {
        renderMessage("valueCallback이 호출되었습니다.");

        const { value } = model;
        return "valueCallback";
      },
    };

    gridView.setColumnProperty("templateColumn", "renderer", renderer);
  });

  return gridContainer();
};
