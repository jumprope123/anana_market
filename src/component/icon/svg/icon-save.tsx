import React from "react";

interface IconSaveProps {
  style?: React.CSSProperties;
}

const IconSave: React.FC<IconSaveProps> = ({ style }) => {
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
        <clipPath id="nr01v0bl7a">
          <path d="M0 0h20v20H0z" fill="none" />
        </clipPath>
      </defs>
      <path d="M0 0h20v20H0z" fill="none" />
      <g clipPath="url(#nr01v0bl7a)">
        <path
          d="M.418 17.816a.409.409 0 0 1-.109-.016.417.417 0 0 1-.295-.51l.677-2.53 1.03-3.842 7.552-7.551 5.176 5.175L6.9 16.094l-3.844 1.03-2.531.676a.416.416 0 0 1-.107.016zM15.51 7.482l-5.176-5.176L12.4.244a.833.833 0 0 1 1.178 0l4 4a.818.818 0 0 1 .181.269.834.834 0 0 1-.181.908l-2.068 2.06z"
          transform="translate(1.006 1.178)"
        />
      </g>
      <rect width="11" height="1.7" rx="0.85" transform="translate(0 1)" />
      <rect width="7" height="1.7" rx="0.85" transform="translate(0 5)" />
      <rect width="3" height="1.7" rx="0.85" transform="translate(0 9)" />
    </svg>
  );
};

export default IconSave;
