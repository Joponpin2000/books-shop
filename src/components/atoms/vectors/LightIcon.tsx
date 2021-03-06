import * as React from "react"
import { SVGProps } from "react"

interface ILogoProps extends SVGProps<SVGSVGElement>{
  size?: "sm" | "md";
}

const SvgComponent = (props: ILogoProps) => (
  props.size === "sm" ? (
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
        d="M10.51 1c-.646 0-1.082.562-1.082 1.115v17.762c0 .553.436 1.123 1.081 1.123h3.243c.646 0 1.082-.57 1.082-1.123V2.115c0-.553-.436-1.115-1.082-1.115H10.51Zm.54 1.622h2.162v2.162H11.05V2.622Zm-7.598.54c-.585 0-1.08.496-1.08 1.081V19.92c0 .585.495 1.08 1.08 1.08h3.243c.585 0 1.082-.495 1.082-1.08V4.243c0-.585-.497-1.08-1.082-1.08H3.452Zm.54 1.622h2.163v1.621H3.993V4.784Zm7.058 1.621h2.162v9.19H11.05v-9.19ZM3.993 8.027h2.162v8.108H3.993V8.027Zm7.057 9.19h2.162v2.161H11.05v-2.162Zm-7.057.54h2.162v1.621H3.993v-1.621Zm15.53-.059 2.133-.357.267 1.6-2.132.356-.268-1.599Zm.796-8.354 1.07 6.398-2.133.357-1.07-6.398 2.133-.357Zm-2.667-2.842 2.132-.356.268 1.599-2.133.356-.267-1.599Zm-.801-1.51c-.547.091-.992.62-.892 1.22l2.324 13.903c.1.598.695.963 1.242.871l3.199-.535c.547-.091.99-.63.89-1.228L21.29 5.32c-.1-.598-.693-.955-1.24-.863l-3.2.535Z"
        fill="#000"
      />
    </svg>
  ) : (
    <svg
      width="3.125rem"
      height="3.125rem"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={25} cy={25} r={25} fill="#F9F9FB" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.51 14c-.646 0-1.082.562-1.082 1.115v17.762c0 .552.436 1.123 1.081 1.123h3.244c.645 0 1.08-.57 1.08-1.123V15.115c0-.553-.435-1.115-1.08-1.115h-3.244Zm.54 1.622h2.162v2.162H24.05v-2.162Zm-7.598.54c-.585 0-1.08.496-1.08 1.081V32.92c0 .585.495 1.08 1.08 1.08h3.243c.585 0 1.081-.495 1.081-1.08V17.243c0-.585-.496-1.08-1.08-1.08h-3.244Zm.54 1.622h2.163v1.621h-2.162v-1.621Zm7.058 1.621h2.162v9.19H24.05v-9.19Zm-7.057 1.622h2.162v8.108h-2.162v-8.108Zm7.057 9.19h2.162v2.161H24.05v-2.162Zm-7.057.54h2.162v1.621h-2.162v-1.621Zm15.53-.059 2.133-.357.267 1.6-2.132.356-.268-1.599Zm.796-8.354 1.07 6.398-2.133.357-1.07-6.398 2.133-.357Zm-2.667-2.842 2.132-.357.268 1.6-2.133.357-.267-1.6Zm-.801-1.51c-.547.091-.992.62-.892 1.22l2.324 13.903c.1.598.695.962 1.242.871l3.199-.535c.547-.091.99-.63.89-1.228L34.29 18.32c-.1-.599-.693-.954-1.24-.863l-3.2.535Z"
        fill="#000"
      />
    </svg>
  )
);

export default SvgComponent
