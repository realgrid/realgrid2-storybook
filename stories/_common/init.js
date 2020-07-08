import { fields01 } from "./fields01";
import { columns01 } from "./columns01";
import { data01 } from "./data01";

/**
 * provider, viewer 생성
 */
export const init0 = (containerId) => {
  if (!containerId) throw new Error("init()에 containerId 필요.");

  const container = document.getElementById(containerId);
  const dataProvider = new RealGrid.LocalDataProvider();
  const gridView = new RealGrid.GridView(container);

  return { container, dataProvider, gridView };
};

/**
 * provider, viewer 생성 + 연결
 */
export const init1 = (containerId) => {
  const { container, dataProvider, gridView } = init0(containerId);
  gridView.setDataSource(dataProvider);

  return { container, dataProvider, gridView };
};

/**
 * provider, viewer 생성 + 연결 + 필드/컬럼 채우기
 */
export const init2 = (containerId) => {
  const { container, dataProvider, gridView } = init1(containerId);
  dataProvider.setFields(fields01);
  gridView.setColumns(columns01);

  return { container, dataProvider, gridView };
};

/**
 * provider, viewer 생성 + 연결 + 필드/컬럼 채우기 + 데이터 채우기까지
 */
export const init = (containerId, callback, timeToCall) => {
  const { container, dataProvider, gridView } = init2(containerId);
  dataProvider.setRows(data01);

  /** 이걸 이렇게 써야 하는지 */
  if (callback)
    setTimeout(
      () => callback({ gridView, dataProvider, container }),
      timeToCall || 0
    );

  return { gridView, dataProvider, container };
};
