import { ColDef, SuppressKeyboardEventParams, ValueFormatterParams } from "ag-grid-community";

import CustomTooltip from "../component/commons/gridToopTip/GridToolTip.component";

// import { CustomHeader } from "components/CustomGridHeader/CustomGridHeader.component";

export interface IColumnOption {
  value: string;
  label: string;
}

// NOTE - 색상 조합 함수
/**
 *
 * @param {string} color1 조합할 첫번째 색상
 * @param {string} color2 조합할 두번째 색상
 * @param {number} ratio1 조합시 첫번째 색상의 비율
 * @param {number} ratio2 조합시 두번째 색상의 비율
 * @param {number} opacity 조합된 색상의 투명도
 * @returns
 */
const blendTwoColors = (
  color1: string,
  color2: string,
  ratio1: number = 2,
  ratio2: number = 8,
  opacity: number = 0.6,
): string => {
  // 각 색상의 RGB 값을 추출
  const r1 = parseInt(color1.slice(1, 3), 16);
  const g1 = parseInt(color1.slice(3, 5), 16);
  const b1 = parseInt(color1.slice(5, 7), 16);

  const r2 = parseInt(color2.slice(1, 3), 16);
  const g2 = parseInt(color2.slice(3, 5), 16);
  const b2 = parseInt(color2.slice(5, 7), 16);

  // 두 색상을 지정된 비율로 블렌딩
  const blendedR = Math.round((r1 * ratio1 + r2 * ratio2) / (ratio1 + ratio2));
  const blendedG = Math.round((g1 * ratio1 + g2 * ratio2) / (ratio1 + ratio2));
  const blendedB = Math.round((b1 * ratio1 + b2 * ratio2) / (ratio1 + ratio2));

  // 투명도를 50%로 설정 (알파 채널 값 수정)
  const alpha = Math.round(255 * opacity);

  // 블렌딩 결과를 16진수 문자열로 변환
  const blendedColor = `#${blendedR.toString(16).padStart(2, "0")}${blendedG.toString(16).padStart(2, "0")}${blendedB
    .toString(16)
    .padStart(2, "0")}${alpha.toString(16).padStart(2, "0")}`;

  return blendedColor;
};

// NOTE - rowData에 따라 배경색 변경
export const getRowStyle = (params: any) => {
  if (params.node.rowIndex % 2 === 0) {
    // 짝수 행의 기본 스타일
    return { backgroundColor: "var(--ag-row-background-color)" };
  }
  if (params.data?.transaction === "add") {
    if (params.data.focused) {
      return { backgroundColor: blendTwoColors("#1cc80533", "#bcdffb") };
    }
    return { backgroundColor: "#1cc80533" };
  } else if (params.data?.transaction === "update") {
    if (params.data.focused) {
      return { backgroundColor: blendTwoColors("#e800ff2b", "#bcdffb") };
    }
    return { backgroundColor: "#e800ff2b" };
  }
  if (params.data?.focused) {
    return { backgroundColor: "#bcdffb50" };
  }
  if (params.data?.backGroundBlue) {
    return { backgroundColor: "rgba(128, 128, 128, 0.4)" };
  }
};

// NOTE - Select 칼럼 정의 함수
/**
 *
 * @param {React.RefObject<AgGridReact> | null} gridRef 적용을 원하는 그리드의 Ref
 * @param {string[]} columnIds Select를 넣을 칼럼 []
 * @param {Record<string, { options: IColumnOption[]; defaultOption: string }>} columnOptionsConfig Select에 들어갈 Options []
 * @returns
 */

export const suppressTab = (params: SuppressKeyboardEventParams) => {
  const event = params.event;
  const key = event.key;

  if (key === "Tab") {
    params.api.stopEditing();
    return false;
  } else if (params.event.keyCode === 38 || params.event.keyCode === 40) {
    params.event.preventDefault();
    return false;
  }

  return false;
};

export const suppressTabWaitingLoading = (params: SuppressKeyboardEventParams) => {
  const event = params.event;
  const key = event.key;
  if (params?.node?.data?.isGridLoading) {
    params.event.preventDefault(); // 이벤트의 기본 동작을 막습니다.
    return true; // true를 반환하면 해당 키보드 이벤트가 무시됩니다.
  }
  if (key === "Tab") {
    params.api.stopEditing();
    return false;
  } else if (params.event.keyCode === 38 || params.event.keyCode === 40) {
    params.event.preventDefault();
    return false;
  }

  return false;
};

export const commonDefaultColDef: ColDef = {
  minWidth: 80,
  resizable: true,
  sortable: true,
  filter: true,
  suppressMovable: false,
  wrapHeaderText: true,
  // autoHeaderHeight: true,
  suppressKeyboardEvent: suppressTab,
  tooltipComponent: CustomTooltip,
  headerComponentParams: (params: any) => {
    return {
      displayName: params.column.getColDef().editable ? `${params.displayName} ✎` : params.displayName,
    };
  },
  headerClass: "ag-header-center",
  cellClass: (params: any) => {
    if (params.column.getColDef().editable) {
      return "editable-cell";
    }
    return "";
  },
};

export const commonDefaultColWaitingLoadingDef: ColDef = {
  minWidth: 50,
  resizable: true,
  sortable: true,
  filter: true,
  wrapHeaderText: true,
  autoHeaderHeight: true,
  suppressMovable: true,
  suppressKeyboardEvent: suppressTabWaitingLoading,
  tooltipComponent: CustomTooltip,
  headerComponentParams: (params: any) => {
    return {
      displayName: params.column.getColDef().editable ? `${params.displayName} ✎` : params.displayName,
    };
  },
  cellClass: (params: any) => {
    if (params.column.getColDef().editable) {
      return "editable-cell";
    }
    return "";
  },
};

export const checkboxColumDef: ColDef = {
  flex: 0,
  minWidth: 50,
  headerName: "",
  field: "checkbox",
  width: 50,
  checkboxSelection: true,
  headerCheckboxSelection: true,
  headerCheckboxSelectionFilteredOnly: true,
  floatingFilter: false,
  sortable: false,
  filter: false,
  pinned: "left",
};

export const currencyFormatter = (params: ValueFormatterParams) => {
  if (params.value) {
    const numberValue = Number(params.value); // 문자열을 숫자로 변환

    // 숫자가 아닌 경우 원래 값을 그대로 반환
    if (isNaN(numberValue)) {
      return params.value;
    }

    // 숫자인 경우 포맷팅하여 반환
    return numberValue.toLocaleString("kr");
  }

  return ""; // 값이 없는 경우 빈 문자열 반환
};

export const print_o_x_formatter = (params: ValueFormatterParams) => {
  if (params.value) {
    const value = String(params.value);

    return !!value ? "O" : "X";
  } else {
    return "X";
  }
};

export const sliceLast2Formatter = (params: ValueFormatterParams) => {
  if (params.value) {
    const value = String(params.value);

    if (value.length === 8) {
      return value.substring(value.length - 2, value.length);
    } else {
      return value.substring(0, 2);
    }
  }

  return ""; // 값이 없는 경우 빈 문자열 반환
};

export const gridCellformat8StringWidthDash = (value: any) => {
  const dateString = value?.value;
  if (dateString?.length !== 8) {
    return dateString;
  }
  // 날짜 문자열을 분할
  const year = dateString.substring(0, 4);
  const month = dateString.substring(4, 6);
  const day = dateString.substring(6, 8);

  // 분할된 문자열을 결합하여 원하는 형식으로 변환
  return `${year}-${month}-${day}`;
};

export const memoFormatter = (params: ValueFormatterParams) => {
  if (!params.data?.memo) {
    return "메모창 열기";
  } else {
    return params.data?.memo;
  }
};
