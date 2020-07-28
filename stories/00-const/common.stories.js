import { withContainer, columns1 } from '../_common';

export default {
  title: '00-글로벌 상수',
};

/** 이거 스냅샷은 어떨까? */
export const column1 = () => {
  return withContainer('pre', JSON.stringify(columns1, null, 2));
};
