import { useEffect } from '@storybook/client-api';
import { gridContainer, renderMessage, initDataset } from '../_common';

export default {
  title: '13-편집',
};

export const 편집 = () => {
  useEffect(() => {
    const { gridView } = initDataset(1);
    gridView.setEditOptions({
      editable: true,
      updatable: true
    });

    setTimeout(() => {
      var curr = gridView.getCurrent();
      gridView.beginUpdateRow(curr.itemIndex);
      gridView.showEditor();
      gridView.setFocus();
    }, 200);
  });

  return gridContainer();
};

export const onRowUpdating = () => {
  useEffect(() => {
    const { gridView, dataProvider } = initDataset(1);
    gridView.setEditOptions({
      insertable: true,
      appendable: true
    });

    setTimeout(() => {
      dataProvider.onRowUpdating = function(provider, row) {
        var item = gridView.getEditingItem(); // 현재 편집 중인 행 정보와 값을 가져옵니다.
        if (item) {
          if (item.values["Age"] <= 100) {
            setTimeout(function() {
              renderMessage("Age must be greater than 100 !");
            }, 10);
            return false; // false를 리턴하면 DataProvider에 저장되지 않습니다.
          }
        }
        return true;
      };

      gridView.setCurrent({itemIndex:0,fieldName:"Age"});
      gridView.showEditor();
      gridView.setEditValue(99);
      gridView.commit(true);
    }, 200);
  });

  return gridContainer();
};

export const onRowUpdated = () => {
  useEffect(() => {
    const { gridView, dataProvider } = initDataset(1);
    gridView.setEditOptions({
      insertable: true,
      appendable: true
    });

    setTimeout(() => {
      dataProvider.onRowUpdated = function(provider, row) {
        var r = provider.getJsonRow(row);
        renderMessage(JSON.stringify(r));
      };

      gridView.setCurrent({itemIndex:0,fieldName:"Age"});
      gridView.showEditor();
      gridView.setEditValue(99);
      gridView.commit(true);
    }, 200);
  });

  return gridContainer();
};