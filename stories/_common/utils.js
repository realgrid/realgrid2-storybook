import container from './container.html';

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

/** container.html 대체 */
export const gridContainer = () => {
  // <div class="grid" id="realgrid"></div>

  return withContainer('div', null, 'realgrid', 'grid');
}

/** container 아래에 단일 노드 추가 */
export const withContainer = (tag, child, id, className) => {
  if (tag) {
    const doc = new DOMParser().parseFromString(container, "text/html");
    const root = doc.getElementById('container');

    const element = doc.createElement(tag);
    if (id) element.setAttribute('id', id);
    if (className) element.setAttribute('class', className);
    if (child) element.innerHTML = child;

    root.prepend(element);
    return root.outerHTML;
  }
  return gridContainer();
};