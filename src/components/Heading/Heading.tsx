import React, { type ComponentProps, type FC, type ReactNode } from "react";
import styles from "./heading.module.css";

type variants = "primary" | "secondary" | "danger" | "success" | "warning";

type Htypes = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

console.log(styles);

type HeadingProps = {
  as: Htypes;
  children: ReactNode;
  variant?: variants;
};

console.log(styles);

export const Heading: FC<ComponentProps<Htypes> & HeadingProps> = (props) => {
  const { as = "h1", children, variant, ...rest } = props;
  const Htype = as as Htypes;

  return React.createElement(
    Htype,
    {
      ...rest,
      className: styles.heading,
    },
    children,
  );
};
