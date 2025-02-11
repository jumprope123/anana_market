import React, { useEffect, useRef } from "react";

import styles from "./GridToolTip.module.css";
const CustomTooltip: React.FC<any> = (props) => {
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tooltipElement = tooltipRef.current;
    if (tooltipElement) {
      const cell = document.querySelector(`[col-id="${props.column.getColId()}"]`);
      const cellRect = cell?.getBoundingClientRect();

      const row = document.querySelector(`[row-id="${props.node.id}"]`);
      const rowRect = row?.getBoundingClientRect();

      if (rowRect && cellRect) {
        // Adjust tooltip position based on cell position
        tooltipElement.style.position = "fixed"; // Position relative to the viewport
        tooltipElement.style.top = `${rowRect.top + window.scrollY + 30}px`;
        tooltipElement.style.left = `${cellRect.left + window.scrollX + 50}px`;
      }
    }
  }, [props]);

  return (
    <div className={styles.wrapper} ref={tooltipRef}>
      <div className="fs_16">
        <pre>{props.valueFormatted || props.value}</pre>
      </div>
    </div>
  );
};

export default CustomTooltip;
