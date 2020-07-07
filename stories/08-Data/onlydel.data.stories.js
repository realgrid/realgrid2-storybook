import { useEffect } from "@storybook/client-api";
import {
  init0,
  init1,
  init2,
  gridContainer,
  renderMessage,
  fields01,
} from "../_common";

export default {
  title: "08-데이터",
};

const AGE_ROWS = [
  { Age: 1 },
  { Age: 2 },
  { Age: 3 },
  { Age: 4 },
  { Age: 5 },
  { Age: 6 },
  { Age: 7 },
  { Age: 8 },
  { Age: 9 },
  { Age: 10 },
];

/**
 * dataProvider 생성후 데이터 채우고 가져오기 테스트
 */
export const View없이Provider채우기 = () => {
  useEffect(() => {
    const dataProvider = new RealGrid.LocalDataProvider();
    dataProvider.setFields(fields01);
    dataProvider.setRows(AGE_ROWS);
    renderMessage(dataProvider.getRows());
  });

  return gridContainer();
};

export const setRowCount = () => {
  useEffect(() => {
    const { dataProvider } = init2("realgrid");
    try {
      dataProvider.setRowCount(10);
    } catch (e) {
      renderMessage(e);
    }
  });

  return gridContainer();
};

export const setRowCountAndSetRows = () => {
  useEffect(() => {
    const { dataProvider } = init2("realgrid");
    dataProvider.setRowCount(10);
    dataProvider.setRows(AGE_ROWS);
  });

  return gridContainer();
};

export const justSetRows = () => {
  useEffect(() => {
    const { dataProvider } = init2("realgrid");
    dataProvider.setRows(AGE_ROWS);
  });

  return gridContainer();
};

export const getRows = () => {
  useEffect(() => {
    const { dataProvider } = init2("realgrid");
    dataProvider.setRows(AGE_ROWS);

    renderMessage(dataProvider.getRows());
  });

  return gridContainer();
};

/**
 * setRows(0) 했을때 데이터가 지워지는건가?
 */
export const setRowCount0 = () => {
  useEffect(() => {
    const { dataProvider } = init2("realgrid");
    dataProvider.setRows(AGE_ROWS);
    dataProvider.setRowCount(0);

    renderMessage(
      `dataProvider.getRows().length = ${dataProvider.getRows().length}`
    );
  });

  return gridContainer();
};

export const removeRows = () => {
  useEffect(() => {
    const { dataProvider } = init2("realgrid");
    dataProvider.setRows(AGE_ROWS);

    dataProvider.removeRow(1);
  });

  return gridContainer();
};
