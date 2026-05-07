import type { ReactNode } from "react";
import styles from "./Section.module.scss";
import clsx from "clsx";

type SectionProps = {
  children: ReactNode;
  className?: string;
};
const Section = ({ children, className }: SectionProps) => {
  return <section className={clsx(styles.root, className)}>{children}</section>;
};

export default Section;
