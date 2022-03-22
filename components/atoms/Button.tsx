import React, { ReactElement } from "react";
import styles from "../../styles/Button.module.scss"

interface PropTypes {
  text?: string;
  iconPosition?: "left" | "right";
  children?: ReactElement | string;
  type?: "submit" | "reset" | "button";
  onClick?: React.DOMAttributes<HTMLButtonElement>["onClick"] | Function;
}
const index = ({
  text,
  iconPosition,
  children,
  type = "submit",
  onClick = () => {},
}: PropTypes) => {
 
  return (
    <button type={type} onClick={(e) => onClick(e)} className={styles.Button}>
      {children && iconPosition === "left" ? (
        <span>{children}</span>
      ) : (
        <span></span>
      )}
      {text}
      {children && iconPosition === "right" ? (
        <span>{children}</span>
      ) : (
        <span></span>
      )}
      {children && !iconPosition ? <span>{children}</span> : <span></span>}
    </button>
  );
};

export default index;
