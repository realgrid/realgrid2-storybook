import { fields01 } from './treefields01';
import { columns01 } from './treecolumns01';
import { data01 } from './treedata01';

/**
 * provider, viewer 생성
 */
export const init0 = (containerId) => {
  if (!containerId) throw new Error('init()에 containerId 필요.');

  const dataProvider = new RealGrid.LocalTreeDataProvider();
  const treeView = new RealGrid.TreeView(container);

  return { container, dataProvider, treeView };
};

/**
 * provider, viewer 생성 + 연결
 */
export const init1 = (containerId) => {
  const { container, dataProvider, treeView } = init0(containerId);
  treeView.setDataSource(dataProvider);

  return { container, dataProvider, treeView };
};

/**
 * provider, viewer 생성 + 연결 + 필드 채우기
 */
export const initFields = (containerId, fields) => {
  const { container, dataProvider, treeView } = init1(containerId);
  dataProvider.setFields(fields || fields01);

  return { container, dataProvider, treeView };
};

/**
 * provider, viewer 생성 + 연결 + 필드/컬럼 채우기
 */
export const init2 = (containerId) => {
  const { container, dataProvider, treeView } = init1(containerId);
  dataProvider.setFields(fields01);
  treeView.setColumns(columns01);

  return { container, dataProvider, treeView };
};

/**
 * provider, viewer 생성 + 연결 + 필드/컬럼 채우기 + 데이터 채우기까지
 */
export const init = (containerId, callback, timeToCall) => {
  const { container, dataProvider, treeView } = init2(containerId);
  dataProvider.setRows(treeData, 'treeId', false, null, "iconField");
  dataProvider.treeOptions.iconImagesRoot = "../../../../../public/images//flags/";
  dataProvider.treeOptions.iconImages = [
      "../tree/folder-open-icon.png","../tree/folder-icon.png", "br.png", "de.png", "es.png", "fr.png", "gr.png", "hu.png", "is.png",
      "kr.png", "mx.png", "pt.png", "us.png", "ve.png"
  ]
  tree.treeOptions.defaultIcon = -1;

  /** 이걸 이렇게 써야 하는지 */
  if (callback)
    setTimeout(
      () => callback({ treeView, dataProvider, container }),
      timeToCall || 0
    );

  return { treeView, dataProvider, container };
};
