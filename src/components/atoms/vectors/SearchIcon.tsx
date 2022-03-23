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
      d="M11.282 18.778c1.53 0 2.943-.518 4.074-1.366l2.802 2.802 1.342-1.342-2.802-2.802a6.782 6.782 0 0 0 1.366-4.074 6.784 6.784 0 0 0-6.782-6.782A6.784 6.784 0 0 0 4.5 11.996a6.784 6.784 0 0 0 6.782 6.782Zm0-11.68a4.894 4.894 0 0 1 4.898 4.898 4.894 4.894 0 0 1-4.898 4.898 4.894 4.894 0 0 1-4.898-4.898 4.894 4.894 0 0 1 4.898-4.898Z"
      fill="#000"
    />
  </svg>
)

export default SvgComponent
