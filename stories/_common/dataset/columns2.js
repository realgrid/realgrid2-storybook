export const columns2 = [
  {
    name: 'taskId',
    fieldName: 'taskId',
    header: {
      title: '아이디',
    },
    width: 60,
    readOnly: true,
    editable: false,
  },
  {
    name: 'title',
    fieldName: 'title',
  },
  {
    name: 'status',
    fieldName: 'status',
    width: 60,
  },
  {
    name: 'dueDate',
    fieldName: 'dueDate',
    look: {
      label: ['보통', '낮음', '높음'],
      value: ['1', '2', '3'],
    },
  },
  {
    name: 'persons',
    fieldName: 'persons',
  },
];
