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
      d="m12.364 19 6.09-5.718a4.218 4.218 0 0 0 1.28-3.021c0-1.136-.461-2.224-1.28-3.021a4.429 4.429 0 0 0-6.09-.053 4.43 4.43 0 0 0-6.09.064A4.218 4.218 0 0 0 5 10.274a4.219 4.219 0 0 0 1.285 3.019L12.364 19ZM7.318 8.285a2.905 2.905 0 0 1 4.43.434l.616.916.616-.916a2.925 2.925 0 0 1 4.43-.434c.535.52.837 1.231.839 1.973a2.763 2.763 0 0 1-.828 1.977l-5.057 4.744-5.046-4.739a2.763 2.763 0 0 1-.836-1.977c0-.743.3-1.455.836-1.978Z"
      fill="#000"
    />
  </svg>
)

export default SvgComponent
