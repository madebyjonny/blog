import React from "react";

export const Image = (imageURL: string) =>
  React.createElement("img", {
    style: {
      width: "70px",
    },
    src: imageURL,
  });

export const BrandingText = (text: string) =>
  React.createElement(
    "span",
    {
      style: {
        color: "#000",
        textTransform: "uppercase",
        letterSpacing: "0.5px",
      },
    },
    text,
  );

export const Branding = () =>
  React.createElement(
    "span",
    {
      style: {
        display: "flex",
        gap: "16px",
        fontSize: "2rem",
        textTransform: "uppercase",
        fontFamily: "sans-serif",
        margin: "0 0 24px 0",
        color: "#000",
      },
    },
    Image("https://blog.madebyjonny.com/logo.svg"),
    BrandingText("madebyjonny"),
  );

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

export const Container = (
  title: string,
  summary: string,
  category?: string,
) => {
  return React.createElement(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: "column",
      },
    },
    Heading(title),
    Paragraph(summary),
  );
};

export const Banner = (title: string, summary: string, category?: string) => {
  return React.createElement(
    "div",
    {
      style: {
        padding: "64px",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#fff",
      },
    },
    Branding(),
    Container(title, summary),
  );
};
