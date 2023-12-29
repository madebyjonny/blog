import { type ComponentProps, type FC, type ReactNode } from "react";
import styles from "./HeroText.module.css";
import { Heading } from "../Heading/Heading";

type Htypes = "h1" | "h2";

type HeroProps = {
  as?: Htypes;
  title: string;
  leadText: string;
};

export const HeroText: FC<ComponentProps<Htypes> & HeroProps> = (props) => {
  const { as = "h1", title, leadText } = props;

  return (
    <header className={styles.heroText}>
      <Heading as={as}>{title}</Heading>
      <p>{leadText}</p>
    </header>
  );
};
