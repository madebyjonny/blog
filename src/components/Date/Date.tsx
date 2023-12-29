import { type ComponentProps, type FC, type ReactNode } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export const DateFromNow: FC<ComponentProps<"span"> & { date: string }> = (
  props,
) => {
  const { date, ...rest } = props;

  return <span {...rest}>{dayjs(date).fromNow()}</span>;
};
