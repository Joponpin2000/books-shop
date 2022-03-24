import *  as React from "react"
import { SVGProps } from "react"
interface ICartProps extends SVGProps<SVGSVGElement>{
  size?: "sm" | "md";
}

const SvgComponent = (props: ICartProps) =>
  props.size === "sm" ? (
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
        d="m14.666 10.018-9.486.959a.564.564 0 0 0-.485.535c0 .234.191.426.426.426h9.481a.639.639 0 1 1 0 1.278H5.088a1.706 1.706 0 0 1-1.67-1.704c0-.444.168-.874.475-1.213.307-.34.718-.55 1.16-.594l.306-.03-1.996-6.897H2.139a.64.64 0 0 1 0-1.278h1.704c.285 0 .535.188.614.461l.36 1.243h9.785c.353 0 .64.286.64.64v5.538a.64.64 0 0 1-.576.636Zm-.703-5.536H5.187l1.465 5.063 7.311-.742v-4.32Z"
        fill="currentColor"
      />
      <path
        d="M3.737 16.5a1.385 1.385 0 1 0 0-2.77 1.385 1.385 0 0 0 0 2.77ZM13.857 16.5a1.385 1.385 0 1 0 0-2.77 1.385 1.385 0 0 0 0 2.77Z"
        fill="currentColor"
      />
    </svg>
  ) : (
    <svg
      width="1.5rem"
      height="1.5rem"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.555 13.357 6.906 14.636a.752.752 0 0 0-.646.713c0 .313.255.568.568.568H19.47a.852.852 0 1 1 0 1.704H6.784a2.274 2.274 0 0 1-2.228-2.272c0-.591.225-1.165.634-1.617.41-.452.958-.733 1.547-.792l.408-.041-2.661-9.195H2.852a.852.852 0 0 1 0-1.704h2.272c.38 0 .713.25.819.615l.48 1.657h13.046c.471 0 .853.382.853.852v7.385a.852.852 0 0 1-.767.848Zm-.938-7.38H6.916l1.954 6.75 9.747-.99v-5.76Z"
        fill="currentColor"
      />
      <path
        d="M4.982 22a1.846 1.846 0 1 0 0-3.693 1.846 1.846 0 0 0 0 3.693ZM18.475 22a1.846 1.846 0 1 0 0-3.693 1.846 1.846 0 0 0 0 3.693Z"
        fill="currentColor"
      />
    </svg>
  );

export default SvgComponent
