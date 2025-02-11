import React, { CSSProperties } from "react";

import IconPencil from "./svg/icon-pencil";
import IconSave from "./svg/icon-save";
import IconStack from "./svg/icon-stack";

type IconNames = "pencil" | "save" | "stack";
export const SvgComponent = ({ name, style }: { name: IconNames; style: React.CSSProperties }) => {
  const _style = {
    width: 20,
    height: 20,
    ...style,
  } as CSSProperties;
  switch (name) {
    case "pencil":
      return <IconPencil style={_style} />;
    case "save":
      return <IconSave style={_style} />;
    case "stack":
      return <IconStack style={_style} />;
    default:
      return <div>No such icon: {name}</div>;
  }
};
