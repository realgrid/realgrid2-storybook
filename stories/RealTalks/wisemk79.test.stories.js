import { useEffect } from '@storybook/client-api';
import {
  gridContainer,
  wisemk_columns1,
  wisemk_data1,
  wisemk_fields1
} from '../_common';

export default {
  title: 'RealTalks',
};

export const 그리드연습 = () => {
  useEffect(() => {
    // DataProvider: 데이터를 관리하는 객체
    const dataProvider = new RealGrid.LocalDataProvider();

    // GridView: 눈에 보이는 부분을 담당하는 객체, 인자로 들어가는 것은 container이다
    const gridView = new RealGrid.GridView('realgrid');
    // DataProvider를 세팅해준다
    gridView.setDataSource(dataProvider);

    // DataProvider에 field, column, row를 먼저 정의한다음 set해준다
    dataProvider.setFields(wisemk_fields1);
    gridView.setColumns(wisemk_columns1);

    // 데이터를 프로바이더에 세팅 setRows
    dataProvider.setRows(wisemk_data1);

    // 데이터를 프로바이더에서 가져옴 getRows
    /**
     * getRows(startRow:number,endRow:number):RowValues[][]
     * 데이터 셋의 특정 구간의 데이터를 2차원 배열로 반환한다.
     *  startRow: number
        시작 데이터 행의 인덱스 0이면 시작, 기본값: 0

        endRow: number
        끝 데이터 행의 인덱스, -1이면 데이터 셋의 끝까지, 기본값: -1
     */
    // console.log(JSON.stringify(dataProvider.getRows(0)))

    /* 
    
    getValues(itemIndex:number):object, 지정한 행의 데이터 값들을 JSON객체로 반환한다.
    - itemIndex: number
    정보를 가져올 행의 순서
    
    getJsonRows(startRow:number,endRow:number):object[]
    데이터 셋의 특정 구간의 데이터를 Object 배열로 반환한다.

    - startRow: number
    시작 데이터 행의 인덱스, 기본값: 0

    - endRow: number
    끝 데이터 행의 인덱스, -1이면 데이터 셋의 끝까지


    getJsonRow(row:number):RowObject
    지정한 데이터 행의 값을 Object 형태로 변환한다.
    - row: number
    행 고유번호
    */
    console.log(JSON.stringify(dataProvider.getJsonRows(1)))

    /**
     * 프로그래밍적으로 데이터 컬럼을 정렬하려면 GridView의 orderBy() 함수를 이용하면되는데,
     * orderBy 함수의 속성
      첫 번째 인자는 정렬을 위한 컬럼의 이름
      두 번째 인자는 정렬방식
      세 번째 인자는 대소문자 구분 유형

      예를들어 Task 순서를 오름차순, DueDate를 내림차순으로 한다면,
     */
    gridView.orderBy(
      ["Task", "DueDate"],
      ["ascending", "descending"],
      ["insensitive", "insensitive"]
    );

    /**
     * 그룹핑
     * 사용자가 직접 그룹핑할 컬럼을 지정하도록 하려면 Group Panel을 보이도록 옵션을 수정
     * 그룹 판넬이 나타난다
     */
    gridView.setGroupPanel({ visible: true });


    /**
     * 만약 프로그래밍 적으로 데이터를 그룹핑하려면 GridView의 groupBy() 함수를 사용
     */
    // gridView.groupBy(["Task"], true, "ascending");

    /**
     * 필터링
     * 필터링은 DataProvider의 데이터중 조건에 맞는 데이터만 그리드에 표시하는 기능
     * FilteringOptions의 enabled는 기본값이 true이며 setFilterOptions()함수로 설정을 변경
     * setColumnFilters 함수
      - 첫 번째 인자는 설정 될 컬럼의 이름 또는 컬럼 객체
      - 두 번째 인자는 필터 객체의 배열, ColumnFilter 의 배열
     */
    gridView.setFilteringOptions({ enabled: true });

    const filters = [
      {
        name: "Task1",
        criteria: "value = 'task1'",
      },
      {
        name: "Task0",
        criteria: "value = 'task0'",
      },
    ];
    gridView.setColumnFilters("Task", filters);

    /**
     * 만약 데이터 수준에서 필터하고싶다면 setRows로 데이터를 세팅하기전에 
     * setFilter로 지정해줄 수 있습니다.  
     *  dataProvider.setFilters({ criteria: "value['Task']='task0'" });
     */


    /**
     * 마지막에 새로운 행 추가: EditOptions.appendable
       기존의 행과 행 사이에 새로운 행 삽입: EditOptions.insertable
     */
    gridView.setEditOptions({
      insertable: true,
      appendable: true,
      editable: true
    });

    /**
     * 동적으로 행 추가
     * UI 동작의 경우 grid가 그려지고 난뒤에 동작해야됨
     * 따라서 시간차가 있어야하기때문에 setTimeout을 줘야함
     * 원래는 버튼으로 동작하게 만들어야함
     */
    // setTimeout(()=> {
    //   var curr = gridView.getCurrent();
    //   gridView.beginInsertRow(Math.max(0, curr.itemIndex), true);
    //   gridView.showEditor();
    //   gridView.setFocus();
    // }, 100)

    // 행 데이터 삭제
    dataProvider.removeRow(1);

    // 동적으로 컬럼 추가
    setTimeout(()=>{
      // dataProvider.addField({
      //   fieldName: "TEXT_Column",
      //   valueType: "text",
      // });
      
      // gridView.addColumn({
      //   name: "TEXT_Column",
      //   fieldName: "TEXT_Column",
      //   width: 150,
      //   header: {
      //     text: "TEXT Column",
      //   },
      //   editor: { type: "line" },
      // });

      dataProvider.addField({
        fieldName: "Status2",
        valueType: "text",
      });

      gridView.addColumn( {
        name: "Status2",
        fieldName: "Status2",
        type: "data",
        editable: false,
        width: "100",
        values: [
          {select_name:'success',select_color:'green'}, 
          {select_name:'stop', select_color: 'red'}, 
          {select_name:'progress',select_color:'yellow'}
        ],
        renderer:{
          type:"html",
          callback: function(grid, cell, w, h) {
          var select = "";
              var values = cell.dataColumn.values;
                  select = `<button onClick="javascript:changeColor()"/>`;
                  // `
                  // <select>
                  //   <option style="background-color:green;" onclick="javascript:changeColor()">success</option>
                  //   <option onclick="javascript:changeColor()">progress</option>
                  //   <option onclick="javascript:changeColor()">stop</option>
                  // </select>
                  // `;
              return select;
          } 
        }
      })
    }, 1000);

    //frame.documentElement 시도

  /**
   * 행 드래그앤 드롭
   * 해당 행을 선택하고
   * 단축키: Ctrl + Alt(windows), options + command(mac)
   * 단축키를 사용하면 행 이동이 가능해진다
   */
    gridView.editOptions.movable = true
    gridView.displayOptions.rowMovable = true

    // 특정 컬럼이 이동이 불가하게 하고 싶으면 아래와 같이하면된다
    gridView.setColumnProperty("Task", "movable", false);

    })

  return gridContainer();
};