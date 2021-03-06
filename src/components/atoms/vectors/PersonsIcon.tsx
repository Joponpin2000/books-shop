import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1.5rem"
    height="1.5rem"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.466 19a.76.76 0 0 0 .758-.76c0-1.13-.33-2.181-.901-3.062a4.073 4.073 0 0 1 2.732-1.048 4.102 4.102 0 0 1 4.095 4.11.76.76 0 1 0 1.517 0c0-3.11-2.513-5.631-5.613-5.631a5.58 5.58 0 0 0-3.72 1.415 5.58 5.58 0 0 0-3.722-1.415c-3.1 0-5.612 2.52-5.612 5.63 0 .42.34.761.758.761a.76.76 0 0 0 .759-.76 4.102 4.102 0 0 1 4.095-4.11c1.05 0 2.007.396 2.732 1.048a5.617 5.617 0 0 0-.902 3.061.76.76 0 1 0 1.517 0c0-.613.134-1.195.374-1.718.24.523.374 1.105.374 1.718 0 .42.34.761.759.761Zm-4.854-7a3.494 3.494 0 0 1-3.488-3.5c0-1.933 1.561-3.5 3.488-3.5a3.494 3.494 0 0 1 3.489 3.5c0 1.933-1.562 3.5-3.489 3.5Zm0-1.522A1.975 1.975 0 0 0 10.584 8.5a1.975 1.975 0 0 0-1.972-1.978A1.975 1.975 0 0 0 6.64 8.5c0 1.093.883 1.978 1.972 1.978Zm7.443 0A1.975 1.975 0 0 0 18.026 8.5a1.975 1.975 0 0 0-1.971-1.978A1.975 1.975 0 0 0 14.083 8.5c0 1.093.883 1.978 1.972 1.978Zm0 1.522a3.494 3.494 0 0 1-3.49-3.5c0-1.933 1.563-3.5 3.49-3.5a3.494 3.494 0 0 1 3.488 3.5c0 1.933-1.562 3.5-3.488 3.5Z"
      fill="currentColor"
    />
  </svg>
)

export default SvgComponent
