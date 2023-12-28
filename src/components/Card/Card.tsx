import React, { type ComponentProps, type FC, type ReactNode } from "react";
import styles from "./card.module.css";
import { Heading } from "../Heading/Heading";

type BlogCardProps = {
  title: string;
  category: string;
  summary: string;
  date: string;
};

export const BlogCard: FC<ComponentProps<"a"> & BlogCardProps> = (props) => {
  const { title, category, date, summary, href, ...rest } = props;

  return (
    <a href={href} className={styles.card}>
      <header>
        <span className={styles.pill}>{category}</span>
        <Heading as="h2">{title}</Heading>
      </header>
      <div className={styles.details}>
        <p>{summary}</p>
        <span>12 minutes ago</span>
      </div>
    </a>
  );
};
