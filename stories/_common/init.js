import { fields01 } from './fields01';
import { columns01 } from './columns01';
import { data01 } from './data01';

export const init = (containerId, callback, timeToCall) => {
  if (!containerId) throw new Error('init()에 containerId 필요.');

  const container = document.getElementById(containerId);
  const dataProvider = new RealGrid.LocalDataProvider();
  const gridView = new RealGrid.GridView(container);
  gridView.setDataSource(dataProvider);

  dataProvider.setFields(fields01);
  gridView.setColumns(columns01);
  dataProvider.setRows(data01);

  /** 이걸 이렇게 써야 하는지 */
  if (callback) setTimeout(() => callback({ gridView, dataProvider, container }), timeToCall || 0);

  return { gridView, dataProvider, container };
};