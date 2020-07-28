import * as ds from './dataset';

// /**
//  * provider, viewer 생성
//  */
// export const init0 = (containerId) => {
//   if (!containerId) throw new Error('init()에 containerId 필요.');

//   const container = document.getElementById(containerId);
//   const dataProvider = new RealGrid.LocalDataProvider();
//   const gridView = new RealGrid.GridView(container);

//   return { container, dataProvider, gridView };
// };

// /**
//  * provider, viewer 생성 + 연결
//  */
// export const init1 = (containerId) => {
//   const { container, dataProvider, gridView } = init0(containerId);
//   gridView.setDataSource(dataProvider);

//   return { container, dataProvider, gridView };
// };

// /**
//  * provider, viewer 생성 + 연결 + 필드 채우기
//  */
// export const initFields = (containerId, fields) => {
//   const { container, dataProvider, gridView } = init1(containerId);
//   dataProvider.setFields(fields || fields01);

//   return { container, dataProvider, gridView };
// };

// /**
//  * provider, viewer 생성 + 연결 + 필드/컬럼 채우기
//  */
// export const init2 = (containerId) => {
//   const { container, dataProvider, gridView } = init1(containerId);
//   dataProvider.setFields(fields01);
//   gridView.setColumns(columns01);

//   return { container, dataProvider, gridView };
// };

// /**
//  * provider, viewer 생성 + 연결 + 필드/컬럼 채우기 + 데이터 채우기까지
//  */
// export const init = (containerId, callback, timeToCall) => {
//   const { container, dataProvider, gridView } = init2(containerId);
//   dataProvider.setRows(data01);

//   /** 이걸 이렇게 써야 하는지 */
//   if (callback)
//     setTimeout(
//       () => callback({ gridView, dataProvider, container }),
//       timeToCall || 0
//     );

//   return { gridView, dataProvider, container };
// };

/**
 * realgrid 초기 구성 함수
 * @param {string} containerId 필수, 컨테이너 아이디
 * @param {string} fields 필드 모듈명
 * @param {string} columns 컬럼 모듈명
 * @param {string} data 데이터 모듈명
 */
export const initCustom = (containerId, fields, columns, data) => {
  /** containerId 필수 */
  const container = document.getElementById(containerId);
  const dataProvider = new RealGrid.LocalDataProvider();
  const gridView = new RealGrid.GridView(container);
  gridView.setDataSource(dataProvider);

  if (fields) dataProvider.setFields(fields);
  if (columns) gridView.setColumns(columns);
  if (data) dataProvider.setRows(data);

  return { container, dataProvider, gridView };
};

/**
 *
 * - dataset 디렉토리에서 (fields1, columns1, data1)과 같은 셑으로 그리드를 구성할 경우
 *   setNumber를 1로 넘기면 됩니다.
 * - 그외의 경우는 initCustom을 이용하면 됩니다.
 */
export const initDataset = (setNumber) => {
  const fields = ds[`fields${setNumber}`];
  const columns = ds[`columns${setNumber}`];
  const data = ds[`data${setNumber}`];
  return initCustom('realgrid', fields, columns, data);
};
