import { useEffect } from "@storybook/client-api";
import { renderMessage, fields01, columns01 } from "../_common";
import "./style.css";

export default {
  title: "01-빈그리드",
};

const container = `
<div class="container" id="realgrid"></div>
<div id="msgelem"></div>
`;

export const 빈그리드 = () => {
  useEffect(() => {
    const dataProvider = new RealGrid.LocalDataProvider();
    const gridView = new RealGrid.GridView("realgrid");
    gridView.setDataSource(dataProvider);

    renderMessage(RealGrid.getVersion());
  });

  return container;
};
빈그리드.story = {
  parameters: {
    notes: "이 화면은 아무것도 없는 빈 그리드 입니다.",
  },
};

/**
 * provider만 생성
 */
export const provider만_생성 = () => {
  useEffect(() => {
    const dataProvider = new RealGrid.LocalDataProvider();
  });

  return container;
};

/**
 * view만 생성
 */
export const View만_생성 = () => {
  useEffect(() => {
    const gridView = new RealGrid.GridView("realgrid");
  });

  return container;
};

/**
 * provider, view 생성
 */
export const provider_view_생성 = () => {
  useEffect(() => {
    const dataProvider = new RealGrid.LocalDataProvider();
    const gridView = new RealGrid.GridView("realgrid");
  });

  return container;
};

/**
 * provider, view 생성 후 연결
 */
export const provider_view_생성후_연결 = () => {
  useEffect(() => {
    const dataProvider = new RealGrid.LocalDataProvider();
    const gridView = new RealGrid.GridView("realgrid");
    gridView.setDataSource(dataProvider);
  });

  return container;
};

/**
 * 컬럼이나 필드생성없이 DataProvider의 함수를 호출할 경우 의도치 않은 오류 메시지
 */
export const 컬럼필드없이_API호출 = () => {
  useEffect(() => {
    const dataProvider = new RealGrid.LocalDataProvider();
    const gridView = new RealGrid.GridView("realgrid");
    gridView.setDataSource(dataProvider);
    dataProvider.setRowCount(10);
  });

  return container;
};

export const 빈그리드_메시지 = () => {
  useEffect(() => {
    const dataProvider = new RealGrid.LocalDataProvider();
    const gridView = new RealGrid.GridView("realgrid");
    gridView.displayOptions.showEmptyMessage = true;
    gridView.displayOptions.emptyMessage = "표시할 데이타가 없습니다.";
    gridView.setDataSource(dataProvider);
  });

  return container;
};
빈그리드_메시지.story = {
  parameters: {
    notes: "빈 그리드에 데이터 없음 메시지를 변경한 화면",
  },
};

export const 빈그리드_헤더높이40 = () => {
  useEffect(() => {
    const dataProvider = new RealGrid.LocalDataProvider();
    const gridView = new RealGrid.GridView("realgrid");
    gridView.setDataSource(dataProvider);

    gridView.header.height = 40;
  });

  return '<div style="width: 500px; height: 300px" id="realgrid"></div>';
};
빈그리드_헤더높이40.story = {
  parameters: {
    notes: "빈 그리드에 헤더 높이를 40 픽셀로 조정한 화면",
  },
};

export const 빈그리드_헤더감추기 = () => {
  useEffect(() => {
    const dataProvider = new RealGrid.LocalDataProvider();
    const gridView = new RealGrid.GridView("realgrid");
    gridView.setDataSource(dataProvider);

    gridView.header.visible = false;
  });

  return '<div style="width: 500px; height: 300px" id="realgrid"></div>';
};

export const 빈그리드_푸터높이40 = () => {
  useEffect(() => {
    const dataProvider = new RealGrid.LocalDataProvider();
    const gridView = new RealGrid.GridView("realgrid");
    gridView.setDataSource(dataProvider);

    gridView.footer.height = 40;
  });

  return '<div style="width: 500px; height: 300px" id="realgrid"></div>';
};
빈그리드_푸터높이40.story = {
  parameters: {
    notes: "빈 그리드에 푸터의 높이를 40 픽셀로 조정한 화면",
  },
};

export const 빈그리드_푸터감추기 = () => {
  useEffect(() => {
    const dataProvider = new RealGrid.LocalDataProvider();
    const gridView = new RealGrid.GridView("realgrid");
    gridView.setDataSource(dataProvider);

    gridView.footers.visible = false;
  });

  return '<div style="width: 500px; height: 300px" id="realgrid"></div>';
};

export const 빈그리드_인디케이터 = () => {
  useEffect(() => {
    const dataProvider = new RealGrid.LocalDataProvider();
    const gridView = new RealGrid.GridView("realgrid");
    gridView.setDataSource(dataProvider);

    gridView.rowIndicator.visible = false;
  });

  return '<div style="width: 500px; height: 300px" id="realgrid"></div>';
};
빈그리드_인디케이터.story = {
  parameters: {
    notes: "빈 그리드에 인디케이터 감추기",
  },
};

export const 빈그리드_상태바 = () => {
  useEffect(() => {
    const dataProvider = new RealGrid.LocalDataProvider();
    const gridView = new RealGrid.GridView("realgrid");
    gridView.setDataSource(dataProvider);

    gridView.stateBar.visible = false;
  });

  return '<div style="width: 500px; height: 300px" id="realgrid"></div>';
};
빈그리드_상태바.story = {
  parameters: {
    notes: "빈 그리드에 상태바 감추기",
  },
};

export const 빈그리드_체크바 = () => {
  useEffect(() => {
    const dataProvider = new RealGrid.LocalDataProvider();
    const gridView = new RealGrid.GridView("realgrid");
    gridView.setDataSource(dataProvider);

    gridView.checkBar.visible = false;
  });

  return '<div style="width: 500px; height: 300px" id="realgrid"></div>';
};
빈그리드_체크바.story = {
  parameters: {
    notes: "빈 그리드에 체크바 감추기",
  },
};
