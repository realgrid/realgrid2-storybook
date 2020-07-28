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

export const initDataset1 = () => {
  const fields = ds['fields1'];
  return initCustom('realgrid', fields, ds.columns1, ds.data1);
};

export const initDataset2 = () => {
  return initCustom('realgrid', ds.fields2, ds.columns2, ds.data2);
};

export const initDataset3 = () => {
  return initCustom('realgrid', ds.fields3, ds.columns3, ds.data3);
};
