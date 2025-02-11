import { CSSProperties, ImgHTMLAttributes, MouseEventHandler } from "react";

import logo from "/vite.svg";

export type IconNames = "logo";

export type CommonIconProps = {
  className?: string;
  name: IconNames;
  width: ImgHTMLAttributes<HTMLImageElement>["width"];
  height?: ImgHTMLAttributes<HTMLImageElement>["height"];
  onClick?: MouseEventHandler<HTMLImageElement>;
  style?: CSSProperties;
};

export const CommonIcon: React.FC<CommonIconProps> = ({ className, name, width, height, onClick, style }) => {
  // 아이콘 이름에 따른 이미지 파일 경로 설정
  let iconPath;
  switch (name) {
    case "logo":
      iconPath = logo;
      break;

    default:
      console.error(`Icon '${name}' not found.`);
      return null;
  }

  // 올바른 이미지 파일의 경로를 src 속성에 설정하여 이미지를 렌더링
  return (
    <img
      src={iconPath}
      alt={name}
      className={className}
      width={width}
      height={height}
      onClick={onClick}
      style={style}
    />
  );
};
