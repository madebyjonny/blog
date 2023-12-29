import React, { type ComponentProps, type FC, type ReactNode } from "react";
import styles from "./footer.module.css";
import { Grid } from "../Grid/Grid";
import { Heading } from "../Heading/Heading";

export const Footer: FC<ComponentProps<"div">> = () => {
  return (
    <Grid>
      <footer className={styles.footer}>
        <Heading as="h3">Follow me here ✌🏻</Heading>
        <a href="https://www.x.com/madebyjonny" target="_blank" aria-label="X">
          𝕏
        </a>
      </footer>
    </Grid>
  );
};
