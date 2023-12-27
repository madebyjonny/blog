import React, { Component, type FC } from "react";
import stylex from "@stylexjs/stylex";

type HeadingProps = {
  level: number;
  children: React.ReactNode;
};

const styles = stylex.create({
  highlighted: {
    color: "blue",
    ":hover": {
      opacity: "0.9",
    },
  },
});

export const Heading: FC<HeadingProps> = (props) => {
  const { level, children } = props;
  const HLevel = `h${level}` as keyof JSX.IntrinsicElements;
  return <HLevel {...stylex.props([styles.highlighted])}>{children}</HLevel>;
};
