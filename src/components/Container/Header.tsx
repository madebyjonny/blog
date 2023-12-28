import React, { type ComponentProps, type FC, type ReactNode } from "react";
import styles from "./container.module.css";

export const Header: FC<ComponentProps<"header">> = (props) => {
  const { children, ...rest } = props;

  return React.createElement(
    "header",
    {
      ...rest,
      className: styles.header,
    },
    children,
  );
};
