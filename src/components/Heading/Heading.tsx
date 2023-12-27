import React, { type ComponentProps, type FC } from "react";
import stylex from "@stylexjs/stylex";

const styles = stylex.create({
  base: {
    color: "blue",
    ":hover": {
      opacity: "0.9",
    },
  },
});

const variants = stylex.create({
  primary: {
    color: "red",
  },
  secondary: {
    color: "green",
  },
});

const types = stylex.create({
  h1: {
    color: "red",
  },
  h2: {
    color: "green",
  },
  h3: {
    color: "blue",
  },
  h4: {
    color: "yellow",
  },
  h5: {
    color: "pink",
  },
  h6: {
    color: "black",
  },
});

type HeadingType = keyof typeof types;

type HeadingProps = {
  type: HeadingType;
  children: React.ReactNode;
  variant?: keyof typeof variants;
};

export const Heading: FC<ComponentProps<HeadingType> & HeadingProps> = (
  props,
) => {
  const { type = "h1", children, variant, ...rest } = props;
  const Htype = type as HeadingType; // Ensure Htype is of type HeadingType

  return React.createElement(
    Htype,
    {
      ...rest,
      ...stylex.props(styles.base, types[type], variant && variants[variant]),
    },
    children,
  );
};
