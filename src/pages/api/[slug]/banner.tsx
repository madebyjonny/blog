import React from "react";

export const Heading = (text: string) =>
  React.createElement(
    "h1",
    {
      style: {
        fontSize: "4rem",
        textTransform: "capitalize",
        fontFamily: "sans-serif",
        margin: "0 0 8px 0",
        color: "#000",
      },
    },
    text,
  );

export const Paragraph = (text: string) =>
  React.createElement(
    "p",
    {
      style: {
        opacity: 0.8,
        fontSize: "2rem",
        fontFamily: "sans-serif",
        margin: 0,
        color: "#000",
      },
    },
    text,
  );

export const Banner = (title: string, summary: string, category?: string) => {
  const titleComp = Heading(title);
  const pComp = Paragraph(summary);
  return React.createElement(
    "div",
    {
      style: {
        padding: "32px",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "pink",
      },
    },
    titleComp,
    pComp,
  );
};
