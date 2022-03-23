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
      d="m8.388.6 2.605 5.061 5.783.808-4.194 3.934.993 5.572-5.187-2.616L3.2 15.975l.993-5.572L0 6.47l5.805-.808L8.388.601Z"
      fill="#EBA430"
    />
  </svg>
)

export default SvgComponent
