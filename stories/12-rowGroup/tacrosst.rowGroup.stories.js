import { useEffect } from '@storybook/client-api';
import { gridContainer, initDataset, renderMessage} from '../_common';

export default {
  title: '12-행그룹',
};

export const 행그룹핑 = () => {
  useEffect(() => {
    const { dataProvider, gridView } = initDataset(1);
    
    gridView.groupBy(["KorName"]);
  });

  return gridContainer();
};


export const 행그룹핑이벤트 = () => {
  useEffect(() => {
    const { dataProvider, gridView } = initDataset(1);

    gridView.onGrouping = function(grid) {
      renderMessage("onGrouping 이벤트가 발생했습니다. true를 반환합니다.");
      return true;
    };

    gridView.groupBy(["KorName"]);
  });

  return gridContainer();
};

export const 그룹푸터 = () => {
  useEffect(() => {
    const { dataProvider, gridView } = initDataset(1);

    gridView.groupBy(["KorName"]);
    //object 형태로 값 설정 불가
    gridView.columnByField("Age").groupFooter.expression = "avg"
    gridView.columnByField("Age").groupFooter.numberFormat = "#,##0.0"
  });

  return gridContainer();
};