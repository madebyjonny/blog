import React, { type ComponentProps, type FC, type ReactNode } from "react";
import styles from "./grid.module.css";

type Ctypes =
  | "div"
  | "span"
  | "article"
  | "section"
  | "aside"
  | "header"
  | "footer";

type ContainerProps = {
  as?: Ctypes;
  children: ReactNode;
};

export const Grid: FC<ComponentProps<Ctypes> & ContainerProps> = (props) => {
  const { as = "div", children, ...rest } = props;
  const Ctype = as as Ctypes;

  return React.createElement(
    Ctype,
    {
      ...rest,
      className: styles.grid,
    },
    children,
  );
};
