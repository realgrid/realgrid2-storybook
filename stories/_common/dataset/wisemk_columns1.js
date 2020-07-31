/* 

컬럼은 DataProvider에 들어 있는 데이터를 그리드에 보여주는 객체이다
GridView의 setColumns() 함수를 이용해서 컬럼을 생성할 수 있다.

컬럼은 DataColumn 을 구현해 주면 되는데 fieldName 속성은 
가져올 데이터 필드의 fieldName 값을 입력해주면 같은 이름을 가진 
필드의 데이터를 찾아 화면에 보여된다.

*/

export const wisemk_columns1 = [
    {
        name: 'Task',
        fieldName: 'Task',
        width: '100',
        styles: {
            textAlignment: 'center'
        },
        header: {
            text: '이름'
        },
        renderer : {
            type: 'text'
        }
    },
    {
        name: 'Person',
        fieldName: 'Person',
        width: '60',
        styles: {
            textAlignment: 'center'
        },
        header: {
            text: '사람'
        },
        renderer : {
            type: 'text'
        }
    },
    {
        name: 'Status',
        fieldName: 'Status',
        width: '60',
        styles: {
            textAlignment: 'center'
        },
        header: {
            text: '상태'
        },
        renderer : {
            type: 'text'
        }
    },
    {
        name: 'DueDate',
        fieldName: 'DueDate',
        width: '100',
        styles: {
          textAlignment: 'center',
        },
        header: {
          text: '끝나는 날짜',
          showTooltip: true,
          tooltip: '끝나는 날의 툴팁입니다.',
        },
        editor: {
          type: 'date',
          datetimeFormat: 'yyyy.MM.dd',
        },
      },
]
