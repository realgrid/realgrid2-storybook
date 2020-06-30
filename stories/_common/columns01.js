export const columns01 = [
  {
    name: "KorName",
    fieldName: "KorName",
    type: "data",
    width: "60",
    styles: {
      textAlignment: "center",
    },
    header: {
      text: "이름",
    },
    renderer: {
      type: "text",
    },
  },
  {
    name: "SexLabel",
    fieldName: "SexLabel",
    type: "data",
    width: "40",
    styles: {
      textAlignment: "center",
    },
    header: {
      text: "성별",
      showTooltip: true,
      tooltip: "test",
    },
    renderer: {
      type: "text",
    },
  },
  {
    name: "Age",
    fieldName: "Age",
    type: "data",
    width: "40",
    styles: {
      textAlignment: "center",
    },
    header: {
      text: "나이",
    },
    renderer: {
      type: "text",
    },
  },

  {
    name: "StartDate",
    fieldName: "StartDate",
    type: "data",
    width: "100",
    styles: {
      textAlignment: "center",
    },
    header: {
      text: "최초납입일",
      showTooltip: true,
      tooltip: "납입일의 툴팁입니다.",
    },
    editor: {
      type: "date",
      datetimeFormat: "yyyy.MM.dd",
    },
  },
  {
    name: "EndDate",
    fieldName: "EndDate",
    type: "data",
    width: "100",
    styles: {
      textAlignment: "center",
    },
    header: {
      text: "종료일",
    },
  },
];
