import React from "react";

interface IconStackProps {
  style?: React.CSSProperties;
}

const IconStack: React.FC<IconStackProps> = ({ style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      style={style}
      fill={style?.color}
    >
      <defs>
        <clipPath id="clip-path">
          <path d="M0 0h20v20H0z" fill="none" />
        </clipPath>
      </defs>
      <path d="M0 0h20v20H0z" fill="none" />
      <g clipPath="url(#clip-path)">
        <path
          d="M15.812.639 14.535 0 9.442 2.547a2.916 2.916 0 0 1-1.3.306 2.918 2.918 0 0 1-1.3-.306L1.74 0 .462.639a.833.833 0 0 0 0 1.492l6.93 3.464a1.664 1.664 0 0 0 1.491 0l6.93-3.465a.833.833 0 0 0 0-1.491"
          transform="translate(1.863 12.782)"
        />
        <path
          d="M15.812.639 14.535 0 9.442 2.547a2.916 2.916 0 0 1-1.3.306 2.918 2.918 0 0 1-1.3-.306L1.74 0 .462.639a.833.833 0 0 0 0 1.492l6.93 3.464a1.664 1.664 0 0 0 1.491 0l6.93-3.465a.833.833 0 0 0 0-1.491"
          transform="translate(1.863 8.615)"
        />
        <path
          d="M7.39 8.6.46 5.131a.833.833 0 0 1 0-1.49L7.39.176a1.664 1.664 0 0 1 1.491 0l6.93 3.465a.833.833 0 0 1 0 1.491L8.881 8.6a1.67 1.67 0 0 1-1.492 0"
          transform="translate(1.865 1.447)"
        />
      </g>
    </svg>
  );
};

export default IconStack;
