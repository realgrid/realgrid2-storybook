import { useEffect } from '@storybook/client-api';
import { gridContainer, initDataset, renderMessage} from '../_common';

export default {
  title: '12-행그룹API',
};

export const 행그룹핑 = () => {
  useEffect(() => {
    const { dataProvider, gridView } = initDataset(1);
    
    gridView.groupBy(["KorName"]);
  });

  return gridContainer();
};

export const 그룹해제 = () => {
  useEffect(() => {
    const { dataProvider, gridView } = initDataset(1);
    
    gridView.groupBy([]);
  });

  return gridContainer();
};

export const 행그룹핑false = () => {
  useEffect(() => {
    const { dataProvider, gridView } = initDataset(1);
    
    if(gridView.isGrouped()){
      renderMessage(gridView.isGrouped());
    }else {
      renderMessage(gridView.isGrouped());
    }
  });

  return gridContainer();
};

export const 행그룹핑true = () => {
  useEffect(() => {
    const { dataProvider, gridView } = initDataset(1);
    
    gridView.groupBy(["KorName"]);

    if(gridView.isGrouped()){
      renderMessage(gridView.isGrouped());
    }else {
      renderMessage(gridView.isGrouped());
    }
  });

  return gridContainer();
};

export const 병합그룹핑여부 = () => {
  useEffect(() => {
    const { dataProvider, gridView } = initDataset(1);
    
    gridView.groupBy(["KorName"]);

    if(gridView.isMergedGrouped()){
      renderMessage(gridView.isMergedGrouped());
    }else {
      renderMessage(gridView.isMergedGrouped());
    }
  });

  return gridContainer();
};

export const getGroupFields = () => {
  useEffect(() => {
    const { dataProvider, gridView } = initDataset(1);
      gridView.groupBy(["KorName"]);
      renderMessage(gridView.getGroupFields());
  });

  return gridContainer();
};

export const getGroupFieldNames = () => {
  useEffect(() => {
    const { dataProvider, gridView } = initDataset(1);
      gridView.groupBy(["KorName"]);
      renderMessage(gridView.getGroupFieldNames());
  });

  return gridContainer();
};

export const getGroupLevels = () => {
  useEffect(() => {
    const { dataProvider, gridView } = initDataset(1);
      gridView.groupBy(["KorName"]);
      renderMessage(gridView.getGroupLevels());
  });

  return gridContainer();
};

export const getGroupLevel = () => {
  useEffect(() => {
    const { dataProvider, gridView } = initDataset(1);
      gridView.groupBy(["KorName"]);
      renderMessage(gridView.getGroupLevel('KorName'));
  });

  return gridContainer();
};

export const isGroupItem = () => {
  useEffect(() => {
    const { dataProvider, gridView } = initDataset(1);
      gridView.groupBy(["KorName"]);
      renderMessage("true: " + gridView.isGroupItem(0));
  });

  return gridContainer();
};
export const isGroupItem2 = () => {
  useEffect(() => {
    const { dataProvider, gridView } = initDataset(1);
      gridView.groupBy(["KorName"]);
      renderMessage("false: " + gridView.isGroupItem(1));
  });

  return gridContainer();
};

export const isParentVisible = () => {
  useEffect(() => {
    const { dataProvider, gridView } = initDataset(1);
      gridView.groupBy(["KorName"]);
      renderMessage("true: " + gridView.isParentVisible(1));
  });

  return gridContainer();
};

export const expandGroup = () => {
  useEffect(() => {
    const { dataProvider, gridView } = initDataset(1);
      gridView.groupBy(["KorName"]);
      gridView.collapseAll();
      gridView.expandGroup(0, true);
  });

  return gridContainer();
};

export const collapseGroup = () => {
  useEffect(() => {
    const { dataProvider, gridView } = initDataset(1);
      gridView.groupBy(["KorName"]);
      gridView.collapseGroup(0, true);
  });

  return gridContainer();
};