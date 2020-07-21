import { columns01 } from '../_common';
import { withContainer } from '../_common';

export default {
  title: '00-글로벌 상수',
};

/** 이거 스냅샷은 어떨까? */
export const column01 = () => {
  return withContainer('pre', JSON.stringify(columns01, null, 2));
  // return `<pre style="width: 500px;">${JSON.stringify(columns01, null, 2)}</pre>`;
};
