import * as React from "react";
import { SVGProps } from "react";

const LeftCaretIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={6}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.5 11.058 5.498.673.5 5.865l5 5.193Z"
      fill="#000"
    />
  </svg>
);

export default LeftCaretIcon;
