import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1.125rem"
    height="1.125rem"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 9.961v-1.31H5.53l3.973-3.974-.927-.927-4.9 4.9L3 9.306l.676.655 4.9 4.9.927-.926L5.53 9.96H15Z"
      fill="#000"
    />
  </svg>
);

export default SvgComponent;
