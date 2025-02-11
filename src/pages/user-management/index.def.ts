import { useState } from "react";
import { ColDef } from "ag-grid-community";

import {
  // checkboxColumDef,
  commonDefaultColDef,
  // memoFormatter,
} from "../../utils/agGridOptions";

// 컬럼별 공통 설정
export const defaultColDef: ColDef = {
  ...commonDefaultColDef,
  filter: false,
  sortable: false,
};

// 컬럼 설정
export const useGridColumns = () => {
  const initialColumnDefs = [
    // checkboxColumn,
    // { headerName: "NO", field: "NO", valueGetter: "node.rowIndex + 1", width: 80, sortOption: false },
    {
      field: "name",
      headerName: "이름",
      cellDataType: "string",
      width: 150,
      tooltipField: "name",
      headerClass: "text-center",
    },
    {
      field: "phone",
      headerName: "전화번호",
      cellDataType: "string",
      width: 150,
      sortOption: true,
      tooltipField: "phone",
      headerClass: "text-center",
      cellClass: "ag-cell-center",
    },
    {
      field: "address",
      headerName: "주소",
      cellDataType: "string",
      flex: 1,
      minWidth: 150,
      sortOption: true,
      tooltipField: "address",
      headerClass: "text-center",
      cellClass: "ag-cell-center",
    },
    {
      field: "invited_by",
      headerName: "초대자",
      cellDataType: "string",
      width: 150,
      sortOption: true,
      tooltipField: "invited_by",
      headerClass: "text-center",
      cellClass: "ag-cell-center",
    },
    {
      field: "remark",
      headerName: "비고",
      cellDataType: "string",
      width: 150,
      sortOption: true,
      tooltipField: "remark",
      headerClass: "text-center",
      cellClass: "ag-cell-center",
    },
  ];

  const [columnDefs, setColumnDefs] = useState(initialColumnDefs);
  return { columnDefs, setColumnDefs };
};
