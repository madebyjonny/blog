import React, { type ComponentProps, type FC, type ReactNode } from "react";
import styles from "./card.module.css";
import { Heading } from "../Heading/Heading";
import { Pill } from "../Pill/Pill";
import { DateFromNow } from "../Date/Date";

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
        <div className={styles.meta}>
          <Pill>{category}</Pill>
          <DateFromNow className={styles.date} date={date} />
        </div>
        <Heading as="h2">{title}</Heading>
      </header>
      <div className={styles.details}>
        <p>{summary}</p>
      </div>
    </a>
  );
};
