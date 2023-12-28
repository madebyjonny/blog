import React, { type ComponentProps, type FC, type ReactNode } from "react";
import styles from "./pill.module.css";

export const Pill: FC<ComponentProps<"span">> = (props) => {
  const { children } = props;

  return <span className={styles.pill}>{children}</span>;
};
