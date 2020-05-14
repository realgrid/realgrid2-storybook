/** 버튼을 만들고  */
export const createButton = (title, onClick) => {
  const container = document.getElementById('root');
  if (!container) throw new Error('createButton()에 container 필요.');

  const button = document.createElement('button');
  button.innerHTML = title;
  button.addEventListener('click', onClick);
  container.appendChild(button);
};

/** 
 * 그리드 아래쪽에 상태를 표시하기 위한 용도로 텍스트를 뿌려준다. 
 * - msg가 Error 면 빨간색 텍스트
 */
export const renderMessage = (msg) => {
  const msgelem = document.getElementById('msgelem');
  if (!msgelem) throw new Error('renderMessage()에 msgelem 필요.');

  msgelem.innerHTML = msg;
  msgelem.style = msg instanceof Error ? 'color: red;' : 'color: green';
};
