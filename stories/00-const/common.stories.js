import { withContainer, columns1, data2, data4 } from '../_common';

export default {
  title: '00-글로벌 상수',
};

/** 이거 스냅샷은 어떨까? */
export const column_1 = () => {
  return withContainer('pre', JSON.stringify(columns1, null, 2));
};

export const data_2 = () => {
  return withContainer('pre', JSON.stringify(data2, null, 2));
};

export const data_4 = () => {
  return withContainer('pre', JSON.stringify(data4, null, 2));
};