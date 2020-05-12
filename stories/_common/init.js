import { fields01 } from './fields01';
import { columns01 } from './columns01';
import { data01 } from './data01';

const init = (containerId) => {
  if (!containerId) throw new Error('init()에 containerId 필요.');

  const container = document.getElementById(containerId);
  const dataProvider = new RealGrid.LocalDataProvider();
  const gridView = new RealGrid.GridView(container);
  gridView.setDataSource(dataProvider);

  dataProvider.setFields(fields01);
  gridView.setColumns(columns01);
  dataProvider.setRows(data01);

  return { gridView, dataProvider, container };
};

export default init;