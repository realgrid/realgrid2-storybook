/* 

fieldName 속성을 가져올 데이터의 Key 이름과 같게 해주면 
DataProvider는 자동으로 데이터를 매핑해준다.

dataType 속성은

- TEXT: CHAR
- NUMBER: INT, UNUM, UINT
- DATETIME: DATE

데이터의 유형에 맞는 Type을 입력합니다.

*/

export const wisemk_fields1 = [
    {
        fieldName: 'Task',
        dataType: 'string'
    },
    {
        fieldName: 'Person',
        dataType: 'string'
    },
    {
        fieldName: 'Status',
        dataType: 'string'
    },
    {
        fieldName: 'DueDate',
        dataType: 'datetime'
    },

]