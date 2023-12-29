import React, { type ComponentProps, type FC, type ReactNode } from "react";
import styles from "./branding.module.css";
import { Grid } from "../Grid/Grid";

export const Branding: FC<ComponentProps<"div">> = () => {
  return (
    <Grid>
      <div className={styles.branding}>
        <img
          width="70px"
          src="/logo.svg"
          alt="made by jonny logo"
          className={styles.logoLight}
        />
        <img
          width="70px"
          src="/logo-white.svg"
          alt="made by jonny logo"
          className={styles.logoDark}
        />
        <span>
          <strong>Madebyjonny</strong> - blog
        </span>
      </div>
    </Grid>
  );
};
