import { useEffect, useRef, useState } from "react";
import ReactDOMServer from "react-dom/server";
import { AgGridReact, AgGridReactProps } from "ag-grid-react";

import LoadingOverlay from "../../component/commons/loadingOverlay/LoadingOverlay.component";
import { FILTER_KOREAN_TRANSLATION } from "../../constants/agGridTranslation";
import { supabase } from "../../db/supabase";
import { getRowStyle } from "../../utils/agGridOptions";

import { defaultColDef, useGridColumns } from "./index.def";

// NOTE - 로딩 오버레이 템플릿
const overlayLoadingTemplate = ReactDOMServer.renderToString(<LoadingOverlay />);

// NOTE - 메인 그리드 옵션
const gridOptions: AgGridReactProps = {
  localeText: FILTER_KOREAN_TRANSLATION,
  rowHeight: 35,
  getRowStyle,
  overlayLoadingTemplate: overlayLoadingTemplate,
};

export const UserManagement = () => {
  const { columnDefs } = useGridColumns();
  const [isLoading, setIsLoading] = useState(true);
  const gridRef = useRef<AgGridReact<any> | null>(null);
  const [data, setData] = useState<any>([]);
  const fetchUser = async () => {
    setIsLoading(true); // 데이터를 가져오기 전에 로딩 상태를 true로 설정
    const { data, error } = await supabase.from("users").select("*");

    if (error) {
      console.error("Error fetching users:", error);
      setIsLoading(false); // 에러가 나면 로딩 종료
      return;
    }
    setData(data);
    setIsLoading(false); // 데이터가 성공적으로 로드되면 로딩 종료
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      유저관리
      <div style={{ height: "100px", width: "100%" }}>
        <AgGridReact
          loading={isLoading}
          ref={gridRef}
          rowSelection="single"
          defaultColDef={defaultColDef}
          rowData={data}
          overlayLoadingTemplate={overlayLoadingTemplate}
          gridOptions={gridOptions}
          onCellFocused={() => {}}
          onCellKeyDown={() => {}}
          columnDefs={columnDefs}
          // suppressRowClickSelection
          tooltipShowDelay={0}
          tooltipMouseTrack
          singleClickEdit={true}
          suppressDragLeaveHidesColumns
          className="ag-theme-quartz"
        />
      </div>
    </>
  );
};
