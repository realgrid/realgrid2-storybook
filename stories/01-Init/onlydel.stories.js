import { useEffect } from '@storybook/client-api';
import './style.css';

export default {
  title: '01-빈그리드'
};

const container = '<div class="container" id="realgrid"></div>';

export const 빈그리드 = () => {
  useEffect(() => {
    const dataProvider = new RealGrid.LocalDataProvider();
    const gridView = new RealGrid.GridView('realgrid');
    gridView.setDataSource(dataProvider);
  }); import { useEffect } from '@storybook/client-api';
  import './style.css';

  export default {
    title: '01-빈그리드'
  };

  const container = '<div class="container" id="realgrid"></div>';

  export const 빈그리드 = () => {
    useEffect(() => {
      const dataProvider = new RealGrid.LocalDataProvider();
      const gridView = new RealGrid.GridView('realgrid');
      gridView.setDataSource(dataProvider);
    });

    return container;
  };
  빈그리드.story = {
    name: '빈그리드 이름',
    parameters: {
      notes: '이 화면은 아무것도 없는 빈 그리드 입니다.',
    },
  };

  export const 빈그리드_메시지 = () => {
    useEffect(() => {
      const dataProvider = new RealGrid.LocalDataProvider();
      const gridView = new RealGrid.GridView('realgrid');
      gridView.displayOptions.emptyMessage = "표시할 데이타가 없습니다.";
      gridView.setDataSource(dataProvider);
    });

    return container;
  };
  빈그리드_메시지.story = {
    parameters: {
      notes: '빈 그리드에 데이터 없음 메시지를 변경한 화면',
    },
  };

  export const 빈그리드_헤더높이40 = () => {
    useEffect(() => {
      const dataProvider = new RealGrid.LocalDataProvider();
      const gridView = new RealGrid.GridView('realgrid');
      gridView.setDataSource(dataProvider);

      gridView.header.height = 40;
    });

    return '<div style="width: 500px; height: 300px" id="realgrid"></div>';
  };
  빈그리드_헤더높이40.story = {
    parameters: {
      notes: '빈 그리드에 헤더 높이를 40 픽셀로 조정한 화면',
    },
  };

  export const 빈그리드_헤더감추기 = () => {
    useEffect(() => {
      const dataProvider = new RealGrid.LocalDataProvider();
      const gridView = new RealGrid.GridView('realgrid');
      gridView.setDataSource(dataProvider);

      gridView.header.visible = false;
    });

    return '<div style="width: 500px; height: 300px" id="realgrid"></div>';
  };

  export const 빈그리드_푸터높이40 = () => {
    useEffect(() => {
      const dataProvider = new RealGrid.LocalDataProvider();
      const gridView = new RealGrid.GridView('realgrid');
      gridView.setDataSource(dataProvider);

      gridView.footer.height = 40;
    });

    return '<div style="width: 500px; height: 300px" id="realgrid"></div>';
  };
  빈그리드_푸터높이40.story = {
    parameters: {
      notes: '빈 그리드에 푸터의 높이를 40 픽셀로 조정한 화면',
    },
  };

  export const 빈그리드_푸터감추기 = () => {
    useEffect(() => {
      const dataProvider = new RealGrid.LocalDataProvider();
      const gridView = new RealGrid.GridView('realgrid');
      gridView.setDataSource(dataProvider);

      gridView.footers.visible = false;
    });

    return '<div style="width: 500px; height: 300px" id="realgrid"></div>';
  };

  export const 빈그리드_인디케이터 = () => {
    useEffect(() => {
      const dataProvider = new RealGrid.LocalDataProvider();
      const gridView = new RealGrid.GridView('realgrid');
      gridView.setDataSource(dataProvider);

      gridView.rowIndicator.visible = false;
    });

    return '<div style="width: 500px; height: 300px" id="realgrid"></div>';
  };
  빈그리드_인디케이터.story = {
    parameters: {
      notes: '빈 그리드에 인디케이터 감추기',
    },
  };

  export const 빈그리드_상태바 = () => {
    useEffect(() => {
      const dataProvider = new RealGrid.LocalDataProvider();
      const gridView = new RealGrid.GridView('realgrid');
      gridView.setDataSource(dataProvider);

      gridView.stateBar.visible = false;
    });

    return '<div style="width: 500px; height: 300px" id="realgrid"></div>';
  };
  빈그리드_상태바.story = {
    parameters: {
      notes: '빈 그리드에 상태바 감추기',
    },
  };

  export const 빈그리드_체크바 = () => {
    useEffect(() => {
      const dataProvider = new RealGrid.LocalDataProvider();
      const gridView = new RealGrid.GridView('realgrid');
      gridView.setDataSource(dataProvider);

      gridView.checkBar.visible = false;
    });

    return '<div style="width: 500px; height: 300px" id="realgrid"></div>';
  };
  빈그리드_체크바.story = {
    parameters: {
      notes: '빈 그리드에 체크바 감추기',
    },
  };

  return container;
};
빈그리드.story = {
  parameters: {
    notes: '이 화면은 아무것도 없는 빈 그리드 입니다.',
  },
};

export const 빈그리드_메시지 = () => {
  useEffect(() => {
    const dataProvider = new RealGrid.LocalDataProvider();
    const gridView = new RealGrid.GridView('realgrid');
    gridView.displayOptions.emptyMessage = "표시할 데이타가 없습니다.";
    gridView.setDataSource(dataProvider);
  });

  return container;
};
빈그리드_메시지.story = {
  parameters: {
    notes: '빈 그리드에 데이터 없음 메시지를 변경한 화면',
  },
};

export const 빈그리드_헤더높이40 = () => {
  useEffect(() => {
    const dataProvider = new RealGrid.LocalDataProvider();
    const gridView = new RealGrid.GridView('realgrid');
    gridView.setDataSource(dataProvider);

    gridView.header.height = 40;
  });

  return '<div style="width: 500px; height: 300px" id="realgrid"></div>';
};
빈그리드_헤더높이40.story = {
  parameters: {
    notes: '빈 그리드에 헤더 높이를 40 픽셀로 조정한 화면',
  },
};

export const 빈그리드_헤더감추기 = () => {
  useEffect(() => {
    const dataProvider = new RealGrid.LocalDataProvider();
    const gridView = new RealGrid.GridView('realgrid');
    gridView.setDataSource(dataProvider);

    gridView.header.visible = false;
  });

  return '<div style="width: 500px; height: 300px" id="realgrid"></div>';
};

export const 빈그리드_푸터높이40 = () => {
  useEffect(() => {
    const dataProvider = new RealGrid.LocalDataProvider();
    const gridView = new RealGrid.GridView('realgrid');
    gridView.setDataSource(dataProvider);

    gridView.footer.height = 40;
  });

  return '<div style="width: 500px; height: 300px" id="realgrid"></div>';
};
빈그리드_푸터높이40.story = {
  parameters: {
    notes: '빈 그리드에 푸터의 높이를 40 픽셀로 조정한 화면',
  },
};

export const 빈그리드_푸터감추기 = () => {
  useEffect(() => {
    const dataProvider = new RealGrid.LocalDataProvider();
    const gridView = new RealGrid.GridView('realgrid');
    gridView.setDataSource(dataProvider);

    gridView.footers.visible = false;
  });

  return '<div style="width: 500px; height: 300px" id="realgrid"></div>';
};

export const 빈그리드_인디케이터 = () => {
  useEffect(() => {
    const dataProvider = new RealGrid.LocalDataProvider();
    const gridView = new RealGrid.GridView('realgrid');
    gridView.setDataSource(dataProvider);

    gridView.rowIndicator.visible = false;
  });

  return '<div style="width: 500px; height: 300px" id="realgrid"></div>';
};
빈그리드_인디케이터.story = {
  parameters: {
    notes: '빈 그리드에 인디케이터 감추기',
  },
};

export const 빈그리드_상태바 = () => {
  useEffect(() => {
    const dataProvider = new RealGrid.LocalDataProvider();
    const gridView = new RealGrid.GridView('realgrid');
    gridView.setDataSource(dataProvider);

    gridView.stateBar.visible = false;
  });

  return '<div style="width: 500px; height: 300px" id="realgrid"></div>';
};
빈그리드_상태바.story = {
  parameters: {
    notes: '빈 그리드에 상태바 감추기',
  },
};

export const 빈그리드_체크바 = () => {
  useEffect(() => {
    const dataProvider = new RealGrid.LocalDataProvider();
    const gridView = new RealGrid.GridView('realgrid');
    gridView.setDataSource(dataProvider);

    gridView.checkBar.visible = false;
  });

  return '<div style="width: 500px; height: 300px" id="realgrid"></div>';
};
빈그리드_체크바.story = {
  parameters: {
    notes: '빈 그리드에 체크바 감추기',
  },
};