import React, { type ComponentProps, type FC, type ReactNode } from "react";
import styles from "./container.module.css";

type Ctypes =
  | "div"
  | "span"
  | "article"
  | "section"
  | "aside"
  | "header"
  | "footer";

type CVariants = "default" | "breakout" | "full";

type ContainerType = {
  as?: Ctypes;
  variant?: CVariants;
};

export const Container: FC<ComponentProps<"a"> & ContainerType> = (props) => {
  const { as = "div", variant = "default", children, ...rest } = props;

  return React.createElement(
    as,
    {
      ...rest,
      "data-variant": variant,
      className: styles.container,
    },
    children,
  );
};
