import { useEffect } from '@storybook/client-api';
import { renderMessage } from '../_common/utils';

export default {
  title: '샘플컴포넌트',
};

export const 샘플_스토리1 = () => {
  useEffect(() => {
    const dataProvider = new RealGrid.LocalDataProvider();
    const gridView = new RealGrid.GridView('realgrid');
    gridView.setDataSource(dataProvider);

    document.getElementById('realgrid').addEventListener('focusin', () => {
      renderMessage(new Error('Error'));
    });

    setTimeout(() => {
      gridView.setFocus();
    }, 100);
  });

  return `
  <div id="realgrid"></div>
  <div id="msgelem"></div>
  `;
};
샘플_스토리1.story = {
  parameters: {
    notes: '샘플 스토리 노트: 버튼을 클릭하면 메시지가 표시됩니다.',
  }
}